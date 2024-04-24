import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  @ApiQuery({
    name: 'type',
    required: false,
  })
  @ApiQuery({
    name: 'location',
    required: false,
  })
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }

  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
