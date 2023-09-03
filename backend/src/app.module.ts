import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
import { ForumPostModule } from './forum-post/forum-post.module';

config()

@Module({
  imports: [
    AuthModule, 
    UserModule,
    MongooseModule.forRoot(process.env.MONGO_URI), 
    ConfigModule.forRoot({
      isGlobal: true,
    }), ForumPostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
