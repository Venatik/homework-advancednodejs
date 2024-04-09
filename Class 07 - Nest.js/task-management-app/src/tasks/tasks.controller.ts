import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';
import { Task, CreateTask } from 'src/interfaces/task.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): Task[] {
    return this.tasksService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Task {
    const id = params.id;
    return this.tasksService.getById(id);
  }

  @Post()
  create(@Body() body: CreateTask) {
    return this.tasksService.create(body);
  }

  @Patch(':id')
  update(@Param() params, @Body() body: Partial<CreateTask>) {
    const id = params.id;
    return this.tasksService.update(id, body);
  }

  @Delete(':id')
  delete(@Param() params) {
    const id = params.id;
    const isTaskDeleted = this.tasksService.delete(id);
    if (isTaskDeleted) {
      return 'Task deleted successfully.';
    }
    return 'Delete operation failed.';
  }
}
