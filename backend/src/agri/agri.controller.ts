import { Body, Controller, Get } from '@nestjs/common';
import { AgriService } from './agri.service';

@Controller('agri')
export class AgriController {
  constructor(private readonly agriService: AgriService) {
  }

  @Get('planting')
  async getPlantingAd(@Body() body){
    return await this.agriService.getPlantingAd(body.location, body.avSpace);
  }

  @Get('weather')
  async getWeatherAd(@Body() body){
    return await this.agriService.getWeatherAd(body.location);
  }

  @Get('disease')
  async getDiseaseAd(@Body() body){
    return await this.agriService.getDiseaseAd(body.symptoms);
  }
}
