import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  async findAll(type?: string, location?: string): Promise<Property[]> {
    const where = {};

    if (type) where['type'] = type;
    if (location) where['location'] = location;

    return await this.propertyRepository.find({
      where,
      relations: ['reservations'],
    });
  }

  async findOne(id: number): Promise<Property> {
    return this.propertyRepository.findOne({
      where: { id },
      relations: ['reservations'],
    });
  }

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const property = this.propertyRepository.create(createPropertyDto);
    await this.propertyRepository.save(property);
    return property;
  }

  async update(
    id: number,
    updatePropertyDto: UpdatePropertyDto,
  ): Promise<Property> {
    let property = await this.propertyRepository.findOneBy({ id });
    property = this.propertyRepository.merge(property, updatePropertyDto);
    await this.propertyRepository.save(property);
    return property;
  }

  async remove(id: number): Promise<void> {
    await this.propertyRepository.delete(id);
  }
}
