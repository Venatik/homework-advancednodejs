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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { Reservation } from './entities/reservation.entity';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @ApiOperation({ summary: 'Retrieves all reservations.' })
  @ApiOkResponse({
    type: [Reservation],
    description: 'All reservations retrieved successfully.',
  })
  @Get()
  @ApiQuery({
    name: 'status',
    required: false,
  })
  findAll(@Query('status') status: string): Promise<Reservation[]> {
    return this.reservationService.findAll(status);
  }

  @ApiOperation({ summary: 'Retrieves a reservation.' })
  @ApiOkResponse({
    type: Reservation,
    description: 'Reservation retrieved successfully.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates a reservation.' })
  @ApiCreatedResponse({
    type: Reservation,
    description: 'Reservation created successfully.',
  })
  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }

  @ApiOperation({ summary: 'Updates a reservation by ID.' })
  @ApiOkResponse({
    type: Reservation,
    description: 'Reservation updated successfully.',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationService.update(+id, updateReservationDto.status);
  }

  @ApiOperation({ summary: 'Deletes a reservation by ID.' })
  @ApiOkResponse({
    type: Reservation,
    description: 'Reservation deleted successfully.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
