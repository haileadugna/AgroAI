import { Injectable } from '@nestjs/common';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { UpdateForumPostDto } from './dto/update-forum-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ForumPost } from './entities/forum-post.entity';
import { Model } from 'mongoose';
import { ForumPostInterface } from './interfaces/forum-post.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ForumPostService {
  constructor(
    @InjectModel(ForumPost.name) private forumPostModel: Model<ForumPostInterface>,
    private userService: UserService,
  ) {}

  async create(username: string, createForumPostDto: CreateForumPostDto) {
    try {
      const author = await this.userService.findOneByUsername(username);

      const createdForumPost = new this.forumPostModel({ author,  ...createForumPostDto });
      return await createdForumPost.save();

    } catch (error) {
      throw new Error(`Failed to create forum post: ${error.message}`);
    }
  }

  async findAll() {
    try{
      return await this.forumPostModel.find().exec();

    } catch(error) {
        throw new Error(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const post = await this.forumPostModel.findById(id).exec();

      if (!post) {
        throw new Error('Post not found');
      }

      return post;

    } catch (error) {
      throw new Error(`Failed to find post: ${error.message}`);
    }
  }

  async update(id: number, updateForumPostDto: UpdateForumPostDto) {
    try {
      const updatedPost = await this.forumPostModel.findByIdAndUpdate(id, updateForumPostDto, { new: true }).exec();
      return updatedPost;
    } catch(error) {
      return error;
    }
  }

  async remove(id: number) {
    try{
      const deletedPost = await this.forumPostModel.findByIdAndDelete({ _id: id }).exec();
    } catch(error) {
      return error
    }
  }
}
