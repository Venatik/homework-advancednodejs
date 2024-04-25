import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReservationDto } from './create-reservation.dto';
import { ReservationStatus } from 'src/util/reservation.enum';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
  @ApiProperty({ enum: ReservationStatus, required: true })
  status: ReservationStatus;
}
