import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectDto } from './dto/subject.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: false, // will discard unknown properties instead of throwing an error
    transform: true,
  }),
)
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto): SubjectDto {
    return this.subjectService.create(createSubjectDto);
  }

  @Get()
  findAll(@Query('difficulty') difficulty: string) {
    return this.subjectService.findAll(difficulty);
  }

  @Get(':id')
  findOne(@Param('id') id: string): SubjectDto {
    return this.subjectService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): SubjectDto {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.subjectService.remove(id);
  }
}
