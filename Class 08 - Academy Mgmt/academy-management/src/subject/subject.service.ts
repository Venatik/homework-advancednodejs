import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Difficulty } from 'src/util/difficulty.enum';
import { SubjectDto } from './dto/subject.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SubjectService {
  private _subjects = [
    {
      id: '987f1234-b56c-78d9-e012-345678901234',
      name: 'Advanced NodeJs',
      numberOfClasses: 15,
      difficulty: Difficulty.Hard,
      academyId: '123e4567-e89b-12d3-a456-426614174000',
      trainerId: '123',
    },
  ];

  create(body: CreateSubjectDto): SubjectDto {
    const id = uuidv4();
    const subject = { id, ...body };
    this._subjects.push(subject);
    return subject;
  }

  findAll(difficulty?: string): SubjectDto[] {
    if (difficulty) {
      return this._subjects.filter((subject) =>
        subject.difficulty.toLowerCase().includes(difficulty.toLowerCase()),
      );
    }
    return this._subjects;
  }

  findOne(id: string): SubjectDto {
    return this._subjects.find((subject) => subject.id === id);
  }

  update(id: string, updateSubjectDto: UpdateSubjectDto): SubjectDto {
    const index = this._subjects.findIndex((subject) => subject.id === id);
    if (index !== -1) {
      this._subjects[index] = {
        ...this._subjects[index],
        ...updateSubjectDto,
      };
      return this._subjects[index];
    }
    throw new Error('Update operation failed.');
  }

  remove(id: string): boolean {
    const index = this._subjects.findIndex((subject) => subject.id === id);
    if (index !== -1) {
      this._subjects.splice(index, 1);
      return true;
    }
    return false;
  }
}
