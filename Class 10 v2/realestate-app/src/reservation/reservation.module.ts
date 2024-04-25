import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Property } from 'src/property/entities/property.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservation]),
    TypeOrmModule.forFeature([Property]),
  ],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
