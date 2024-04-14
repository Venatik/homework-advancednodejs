import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { AcademyService } from './academy.service';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { AcademyDto } from './dto/academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';

@Controller('academy')
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @Post()
  create(@Body() createAcademyDto: CreateAcademyDto): AcademyDto {
    return this.academyService.create(createAcademyDto);
  }

  @Get()
  findAll(@Query('name') name?: string): AcademyDto[] {
    return this.academyService.findAll(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string): AcademyDto {
    return this.academyService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcademyDto: UpdateAcademyDto,
  ): AcademyDto {
    return this.academyService.update(id, updateAcademyDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.academyService.delete(id);
  }
}
