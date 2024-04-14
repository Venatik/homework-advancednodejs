import { Injectable, UsePipes } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { v4 as uuid } from 'uuid';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  private _students = [];

  create(createStudentDto: CreateStudentDto): StudentDto {
    const id = uuid();
    const student = { id, ...createStudentDto };
    this._students.push(student);
    return student;
  }

  findAll(age?: number): StudentDto[] {
    if (age) {
      return this._students.filter((student) => student.age === age);
    }
    return this._students;
  }

  findOne(id: string): StudentDto {
    return this._students.find((student) => student.id === id);
  }

  update(id: string, updateStudentDto: UpdateStudentDto): StudentDto {
    const index = this._students.findIndex((student) => student.id === id);
    if (index !== -1) {
      this._students[index] = {
        ...this._students[index],
        ...updateStudentDto,
      };
      return this._students[index];
    }
    throw new Error('Update operation failed.');
  }

  remove(id: string): boolean {
    const index = this._students.findIndex((student) => student.id === id);
    if (index !== -1) {
      this._students.splice(index, 1);
      return true;
    }
    return false;
  }
}
