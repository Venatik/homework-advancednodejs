import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { TrainerDto } from './dto/trainer.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: false,
    transform: true,
  }),
)
@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Post()
  create(@Body() createTrainerDto: CreateTrainerDto): TrainerDto {
    return this.trainerService.create(createTrainerDto);
  }

  @Get()
  findAll(@Query('age') age: number): TrainerDto[] {
    return this.trainerService.findAll(age);
  }

  @Get(':id')
  findOne(@Param('id') id: string): TrainerDto {
    return this.trainerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainerDto: UpdateTrainerDto,
  ): TrainerDto {
    return this.trainerService.update(id, updateTrainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.trainerService.remove(id);
  }
}
