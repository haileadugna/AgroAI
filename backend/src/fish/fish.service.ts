import { Injectable } from '@nestjs/common';

@Injectable()
export class FishService {
    async getFishingAd(location : string, waterSize : string){};
    async getWeatherAd(location : string){};
    async getDiseaseAd(disease : string, fishtype : string){};

}
