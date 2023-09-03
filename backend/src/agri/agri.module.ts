import { Module } from '@nestjs/common';
import { AgriService } from './agri.service';
import { AgriController } from './agri.controller';

@Module({
  controllers: [AgriController],
  providers: [AgriService],
})
export class AgriModule {}
