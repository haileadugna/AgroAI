import { Test, TestingModule } from '@nestjs/testing';
import { AgriController } from './agri.controller';
import { AgriService } from './agri.service';

describe('AgriController', () => {
  let controller: AgriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgriController],
      providers: [AgriService],
    }).compile();

    controller = module.get<AgriController>(AgriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
