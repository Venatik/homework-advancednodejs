import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserprofilesService } from './userprofiles.service';
import { CreateUserprofileDto } from './dto/create-userprofile.dto';
import { UpdateUserprofileDto } from './dto/update-userprofile.dto';
import { ApiTags } from '@nestjs/swagger';
import { Userprofile } from './entities/userprofile.entity';

@ApiTags('userprofiles')
@Controller('userprofiles')
export class UserprofilesController {
  constructor(private readonly userprofilesService: UserprofilesService) {}

  //  TODO: Implement Query Params

  @Get()
  findAll(): Promise<Userprofile[]> {
    return this.userprofilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Userprofile> {
    return this.userprofilesService.findOne(+id);
  }

  @Post()
  create(
    @Body() createUserprofileDto: CreateUserprofileDto,
  ): Promise<Userprofile> {
    return this.userprofilesService.create(createUserprofileDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserprofileDto: UpdateUserprofileDto,
  ): Promise<Userprofile> {
    return this.userprofilesService.update(+id, updateUserprofileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userprofilesService.remove(+id);
  }
}
