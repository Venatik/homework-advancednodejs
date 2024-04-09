import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';
import { Category, CreateCategory } from 'src/interfaces/category.interface';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAll(): Category[] {
    return this.categoriesService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Category {
    const id = params.id;
    return this.categoriesService.getById(id);
  }

  @Post()
  create(@Body() body: CreateCategory) {
    return this.categoriesService.create(body);
  }

  @Patch(':id')
  update(@Param() params, @Body() body: Partial<CreateCategory>) {
    const id = params.id;
    return this.categoriesService.update(id, body);
  }

  @Put(':id')
  replace(@Param() params, @Body() body: CreateCategory) {
    const id = params.id;
    return this.categoriesService.replace(id, body);
  }

  @Delete(':id')
  delete(@Param() params) {
    const id = params.id;
    const isCategoryDeleted = this.categoriesService.delete(id);
    if (isCategoryDeleted) {
      return 'Category deleted successfully.';
    }
    return 'Delete operation failed.';
  }
}
