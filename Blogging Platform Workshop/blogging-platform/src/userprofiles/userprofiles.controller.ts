import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserprofilesService } from './userprofiles.service';
import { CreateUserprofileDto } from './dto/create-userprofile.dto';
import { UpdateUserprofileDto } from './dto/update-userprofile.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Userprofile } from './entities/userprofile.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';

// @UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('userprofiles')
@ApiBearerAuth()
@Controller('userprofiles')
export class UserprofilesController {
  constructor(private readonly userprofilesService: UserprofilesService) {}

  //  TODO: Implement Query Params

  @ApiOperation({ summary: 'Retrieves all users.' })
  @ApiOkResponse({
    type: [Userprofile],
    description: 'All users retrieved successfully.',
  })
  @Get()
  // @ApiQuery({
  //   name: 'name',
  //   required: false,
  //   type: String,
  //   description: 'Filter user by name',
  // })
  findAll(): Promise<Userprofile[]> {
    return this.userprofilesService.findAll();
  }

  @ApiOperation({ summary: 'Retrieves a user.' })
  @ApiOkResponse({
    type: Userprofile,
    description: 'User retrieved successfully.',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Userprofile> {
    return this.userprofilesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates a user.' })
  @ApiOkResponse({
    type: Userprofile,
    description: 'User created successfully.',
  })
  @Post()
  create(
    @Body() createUserprofileDto: CreateUserprofileDto,
  ): Promise<Userprofile> {
    return this.userprofilesService.create(createUserprofileDto);
  }

  @ApiOperation({ summary: 'Updates a user.' })
  @ApiOkResponse({
    type: Userprofile,
    description: 'User updated successfully.',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserprofileDto: UpdateUserprofileDto,
  ): Promise<Userprofile> {
    return this.userprofilesService.update(+id, updateUserprofileDto);
  }

  @ApiOperation({ summary: 'Deletes a user.' })
  @ApiOkResponse({
    type: Userprofile,
    description: 'User deleted successfully.',
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userprofilesService.remove(+id);
  }
}
