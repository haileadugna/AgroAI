import { Body, Controller, Get } from '@nestjs/common';
import { FishService } from './fish.service';

@Controller('fish')
export class FishController {
  constructor(private readonly fishService: FishService) {}

  @Get('fishing')
  async getFishingAd(@Body() body){
    return this.fishService.getFishingAd(body.location, body.waterSize);
  }

  @Get('weather')
  async getWeatherAd(@Body() body){
    return this.fishService.getWeatherAd(body.location);
  }

  @Get('disease')
  async getDiseaseAd(@Body() body){
    return this.fishService.getDiseaseAd(body.diseases, body.fishtype);
  }
}
