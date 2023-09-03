import { Module } from '@nestjs/common';
import { ForumPostService } from './forum-post.service';
import { ForumPostController } from './forum-post.controller';
import { ForumPost, ForumPostSchema } from './entities/forum-post.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ForumPost.name, schema: ForumPostSchema }]),
    UserModule,
  ],
  controllers: [ForumPostController],
  providers: [ForumPostService],
})
export class ForumPostModule {}
