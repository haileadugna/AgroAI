import { Injectable } from '@nestjs/common';

@Injectable()
export class AgriService {
    async getPlantingAd(location : string, avSpace : string){};
    async getWeatherAd(location : string){};
    async getDiseaseAd(symptoms : string){};

}
