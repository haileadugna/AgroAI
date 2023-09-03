import { Body, Controller, Get } from '@nestjs/common';
import { AgriService } from './agri.service';

@Controller('agri')
export class AgriController {
  constructor(private readonly agriService: AgriService) {
  }

  @Get('getPlantingAd')
  async getPlantingAd(@Body() body){
    return await this.agriService.getPlantingAd(body.location, body.avSpace);
  }

  @Get('getWeatherAd')
  async getWeatherAd(@Body() body){
    return await this.agriService.getWeatherAd(body.location);
  }

  @Get('getDiseaseAd')
  async getDiseaseAd(@Body() body){
    return await this.agriService.getDiseaseAd(body.symptoms);
  }
}
