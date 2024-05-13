import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './entities/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postRepository: Repository<Posts>,
  ) {}

  async findAll(): Promise<Posts[]> {
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<Posts> {
    return this.postRepository.findOneBy({ id });
  }

  async create(createPostDto: CreatePostDto): Promise<Posts> {
    const post = this.postRepository.create(createPostDto);
    await this.postRepository.save(post);
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Posts> {
    let post = await this.postRepository.findOneBy({ id });
    post = this.postRepository.merge(post, updatePostDto);
    await this.postRepository.save(post);
    return post;
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
