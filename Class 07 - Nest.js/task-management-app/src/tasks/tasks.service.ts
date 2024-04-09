import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Task, CreateTask } from 'src/interfaces/task.interface';
import { tasks } from 'data/tasks';

@Injectable()
export class TasksService {
  private _tasks = tasks;
  create(body: CreateTask): Task {
    const id = uuid();
    const task: Task = { id, ...body };
    console.log(task);
    this._tasks.push(task);
    return task;
  }

  getAll(): Task[] {
    return this._tasks;
  }

  getById(id: string): Task {
    return this._tasks.find((task) => task.id === id);
  }

  update(id: string, body: Partial<CreateTask>): Task {
    const index = this._tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this._tasks[index] = { ...this._tasks[index], ...body };
      return this._tasks[index];
    }
    throw new Error('Update operation failed.');
  }

  delete(id: string): boolean {
    const index = this._tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this._tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}
