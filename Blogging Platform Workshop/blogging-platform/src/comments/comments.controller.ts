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
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Comment } from './entities/comment.entity';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('comments')
@ApiBearerAuth()
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({ summary: 'Retrieves all comments.' })
  @ApiOkResponse({
    type: [Comment],
    description: 'All comments retrieved successfully.',
  })
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @ApiOperation({ summary: 'Retrieves a comment.' })
  @ApiOkResponse({
    type: Comment,
    description: 'Comment retrieved successfully.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates a new comment.' })
  @ApiOkResponse({
    type: Comment,
    description: 'Comment created successfully.',
  })
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @ApiOperation({ summary: 'Updates a comment.' })
  @ApiOkResponse({
    type: Comment,
    description: 'Comment updated successfully.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @ApiOperation({ summary: 'Deletes a comment.' })
  @ApiOkResponse({
    type: Comment,
    description: 'Comment deleted successfully.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
