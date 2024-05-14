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
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Posts } from './entities/posts.entity';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('posts')
@ApiBearerAuth()
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Retrieves all posts.' })
  @ApiOkResponse({
    type: [Posts],
    description: 'All posts retrieved successfully.',
  })
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @ApiOperation({ summary: 'Retrieves a post.' })
  @ApiOkResponse({
    type: [Posts],
    description: 'Post retrieved successfully.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates a new post.' })
  @ApiOkResponse({
    type: Posts,
    description: 'Post created successfully.',
  })
  @ApiBody({ type: CreatePostDto })
  @Post()
  // TODO: Add @Roles decorator to restrict access to only users with the 'admin' role
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({ summary: 'Updates a post.' })
  @ApiOkResponse({
    type: Posts,
    description: 'Post updated successfully.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @ApiOperation({ summary: 'Deletes a post.' })
  @ApiOkResponse({
    type: Posts,
    description: 'Post deleted successfully.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
