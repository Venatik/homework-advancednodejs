import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Reservation } from './entities/reservation.entity';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  @ApiQuery({
    name: 'status',
    required: false,
  })
  findAll(@Query('status') status: string): Promise<Reservation[]> {
    return this.reservationService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
