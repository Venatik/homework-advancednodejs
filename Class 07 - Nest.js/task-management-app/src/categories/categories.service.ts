import { Injectable } from '@nestjs/common';
import { Category, CreateCategory } from 'src/interfaces/category.interface';
import { categories } from 'data/categories';

@Injectable()
export class CategoriesService {
  private _categories = categories;
  // create, get all, get id, update, delete

  getAll(): Category[] {
    return this._categories;
  }

  getById(id: string): Category {
    return this._categories.find((category) => category.id === id);
  }

  create(body: CreateCategory): Category {
    const category: Category = { ...body };
    this._categories.push(category);
    return category;
  }

  update(id: string, body: Partial<CreateCategory>) {
    const index = this._categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      this._categories[index] = { ...this._categories[index], ...body };
      return this._categories[index];
    }
    throw new Error('Update operation failed.');
  }

  replace(id: string, body: CreateCategory) {
    const index = this._categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      this._categories[index] = { id, ...body };
      return this._categories[index];
    }
    throw new Error('Update operation failed.');
  }

  delete(id: string): boolean {
    const index = this._categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      this._categories.splice(index, 1);
      return true;
    }
    return false;
  }
}
