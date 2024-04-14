import { Injectable } from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { v4 as uuid } from 'uuid';
import { TrainerDto } from './dto/trainer.dto';

@Injectable()
export class TrainerService {
  private _trainers = [];

  create(createTrainerDto: CreateTrainerDto): TrainerDto {
    const id = uuid();
    const trainer = { id, ...createTrainerDto };
    this._trainers.push(trainer);
    return trainer;
  }

  findAll(age?: number): TrainerDto[] {
    if (age) {
      return this._trainers.filter((trainer) => trainer.age === age);
    }
    return this._trainers;
  }

  findOne(id: string): TrainerDto {
    return this._trainers.find((trainer) => trainer.id === id);
  }

  update(id: string, updateTrainerDto: UpdateTrainerDto): TrainerDto {
    const index = this._trainers.findIndex((trainer) => trainer.id === id);
    if (index !== -1) {
      this._trainers[index] = {
        ...this._trainers[index],
        ...updateTrainerDto,
      };
      return this._trainers[index];
    }
    throw new Error('Update operation failed.');
  }

  remove(id: string): boolean {
    const index = this._trainers.findIndex((trainer) => trainer.id === id);
    if (index !== -1) {
      this._trainers.splice(index, 1);
      return true;
    }
    return false;
  }
}
