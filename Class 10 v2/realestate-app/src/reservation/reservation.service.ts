import { ConflictException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { Property } from 'src/property/entities/property.entity';
import { ReservationStatus } from 'src/util/reservation.enum';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  async findAll(status?: string): Promise<Reservation[]> {
    const where = {};

    if (status) where['status'] = status;

    return this.reservationRepository.find({ where });
  }

  async findOne(id: number): Promise<Reservation> {
    return await this.reservationRepository.findOneBy({ id });
  }

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const startDate = new Date(createReservationDto.checkIn);
    const endDate = new Date(createReservationDto.checkOut);

    const overlappingReservations = await this.findOverlappingReservations(
      createReservationDto.propertyId,
      startDate,
      endDate,
    );

    if (overlappingReservations.length > 0) {
      throw new ConflictException(
        'The property is already booked for the selected dates',
      );
    }

    const property = await this.propertyRepository.findOne({
      where: { id: createReservationDto.propertyId },
    });

    const reservation = this.reservationRepository.create({
      ...createReservationDto,
      property,
    });

    return this.reservationRepository.save(reservation);
  }

  async update(id: number, status: ReservationStatus): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOneBy({ id });

    reservation.status = status;
    await this.reservationRepository.save(reservation);
    return reservation;
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }

  async findOverlappingReservations(
    propertyId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<Reservation[]> {
    const truncatedStartDate = new Date(
      Math.floor(startDate.getTime() / 1000) * 1000,
    );
    const truncatedEndDate = new Date(
      Math.floor(endDate.getTime() / 1000) * 1000,
    );

    return this.reservationRepository
      .createQueryBuilder('reservation')
      .where('reservation.propertyId = :propertyId', { propertyId })
      .andWhere('reservation.checkIn <= :endDate', {
        endDate: truncatedEndDate,
      })
      .andWhere('reservation.checkOut >= :startDate', {
        startDate: truncatedStartDate,
      })
      .getMany();
  }
}
