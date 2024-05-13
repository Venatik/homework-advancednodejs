import { Injectable } from '@nestjs/common';
import { CreateUserprofileDto } from './dto/create-userprofile.dto';
import { UpdateUserprofileDto } from './dto/update-userprofile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Userprofile } from './entities/userprofile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserprofilesService {
  constructor(
    @InjectRepository(Userprofile)
    private userprofileRepository: Repository<Userprofile>,
  ) {}

  async findAll(
    firstName?: string,
    lastName?: string,
    age?: number,
  ): Promise<Userprofile[]> {
    return this.userprofileRepository.find();
  }

  async findOne(id: number): Promise<Userprofile> {
    return this.userprofileRepository.findOneBy({ id });
  }

  async create(
    createUserprofileDto: CreateUserprofileDto,
  ): Promise<Userprofile> {
    const userProfile = this.userprofileRepository.create(createUserprofileDto);
    await this.userprofileRepository.save(userProfile);
    return userProfile;
  }

  async update(
    id: number,
    updateUserprofileDto: UpdateUserprofileDto,
  ): Promise<Userprofile> {
    let userProfile = await this.userprofileRepository.findOneBy({ id });
    userProfile = this.userprofileRepository.merge(
      userProfile,
      updateUserprofileDto,
    );
    await this.userprofileRepository.save(userProfile);
    return userProfile;
  }

  async remove(id: number): Promise<void> {
    await this.userprofileRepository.delete(id);
  }
}
