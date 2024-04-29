import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { Property } from './entities/property.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guard';
import { Role } from 'src/util/role.enum';
import { Roles } from 'src/decorators/roles.decorators';

@UseGuards(JwtAuthGuard, RoleGuard)
@ApiBearerAuth()
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @ApiOperation({ summary: 'Retrieves all properties.' })
  @ApiOkResponse({
    type: [Property],
    description: 'All properties retrieved successfully.',
  })
  @Get()
  @ApiQuery({
    name: 'type',
    required: false,
  })
  @ApiQuery({
    name: 'location',
    required: false,
  })
  findAll(@Query('type') type: string, @Query('location') location: string) {
    return this.propertyService.findAll(type, location);
  }

  @ApiOperation({ summary: 'Retrieves a property.' })
  @ApiOkResponse({
    type: Property,
    description: 'Property retrieved successfully.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates a property.' })
  @ApiCreatedResponse({
    type: Property,
    description: 'Property created successfully.',
  })
  @Post()
  @Roles(Role.Admin)
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @ApiOperation({ summary: 'Updates a property by ID.' })
  @ApiOkResponse({
    type: Property,
    description: 'Property updated successfully.',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @ApiOperation({ summary: 'Deletes a property by ID.' })
  @ApiOkResponse({
    type: Property,
    description: 'Property deleted successfully.',
  })
  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
