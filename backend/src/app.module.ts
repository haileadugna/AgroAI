import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
import { ForumPostModule } from './forum-post/forum-post.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgriModule } from './agri/agri.module';
import { FishModule } from './fish/fish.module';

config()

@Module({
  imports: [
    AuthModule, 
    UserModule,
    MongooseModule.forRoot(process.env.MONGO_URI), 
    ConfigModule.forRoot({
      isGlobal: true,
    }), ForumPostModule, AgriModule, FishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
