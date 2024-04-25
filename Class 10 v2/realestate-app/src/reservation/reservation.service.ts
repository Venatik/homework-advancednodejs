import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { Property } from 'src/property/entities/property.entity';

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

  // async create(
  //   createReservationDto: CreateReservationDto,
  // ): Promise<Reservation> {
  //   const reservation = this.reservationRepository.create(createReservationDto);
  //   await this.reservationRepository.save(reservation);
  //   return reservation;
  // }

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const property = await this.propertyRepository.findOne({
      where: { id: createReservationDto.propertyId },
    });

    const reservation = this.reservationRepository.create({
      ...createReservationDto,
      property,
    });

    return this.reservationRepository.save(reservation);
  }

  async update(
    id: number,
    updateReservationDto: UpdateReservationDto,
  ): Promise<Reservation> {
    let reservation = await this.reservationRepository.findOneBy({ id });
    reservation = this.reservationRepository.merge(
      reservation,
      updateReservationDto,
    );
    await this.reservationRepository.save(reservation);
    return reservation;
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }
}
