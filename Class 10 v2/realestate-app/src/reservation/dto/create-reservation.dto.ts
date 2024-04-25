import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ReservationStatus } from 'src/util/reservation.enum';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsString()
  readonly customerName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly propertyId: number;

  @IsNotEmpty()
  @IsDateString()
  readonly checkIn: Date;

  @IsNotEmpty()
  @IsDateString()
  readonly checkOut: Date;

  @IsNotEmpty()
  @IsEnum(ReservationStatus)
  readonly status: ReservationStatus;
}
