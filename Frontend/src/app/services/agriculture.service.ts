import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {

  private baseUrl = 'http://localhost:3000/api/v1/agriculture';
  constructor(private http: HttpClient) { }

  getListText() {
    return ["Enter your avealible space and your location to Generative personalized planting guide. suggesting suitable crops, planting times, and care instructions based on local climate and solutions conditions.",
    "Submit any symptoms observed the plants to be provided with insights an potantial pests or disease along with natural remedies or recommended treatments."
    ]
  }
  getTemperature() {
    return this.http.get(`${this.baseUrl}/temperature`)
  }

  getSuggestion() {
    return this.http.get(`${this.baseUrl}/suggestion`)
  }

  getPlanting(location:string, space:string) {
    const params = new HttpParams()
      .set('location', location)
      .set('space', space)
    return this.http.get(`${this.baseUrl, (params)}/planting`)
  }

  getDiseaseManagment(disease:string) {
    const params = new HttpParams()
      .set('disease', disease);
    return this.http.get(`${this.baseUrl, (params)}/disease-management`)
  }

}
