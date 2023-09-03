import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForumPostService } from './forum-post.service';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { UpdateForumPostDto } from './dto/update-forum-post.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('forum-post')
export class ForumPostController {
  constructor(private readonly forumPostService: ForumPostService) {}

  @Post()
  async create(@GetUser() username: string, @Body() createForumPostDto: CreateForumPostDto) {
    return await this.forumPostService.create(username, createForumPostDto);
  }

  @Get()
  async findAll() {
    return await this.forumPostService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.forumPostService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateForumPostDto: UpdateForumPostDto) {
    return await this.forumPostService.update(+id, updateForumPostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.forumPostService.remove(+id);
  }
}
