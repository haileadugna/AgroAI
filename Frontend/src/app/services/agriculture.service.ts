import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {

  private baseUrl = 'http://localhost:3000/api/v1/agri';
  constructor(private http: HttpClient) { }

  getListText() {
    return ["Enter your avealible space and your location to Generative personalized planting guide. suggesting suitable crops, planting times, and care instructions based on local climate and solutions conditions.",
    "Submit any symptoms observed the plants to be provided with insights an potantial pests or disease along with natural remedies or recommended treatments."
    ]
  }

  getSuggestion() {
    return this.http.get(`${this.baseUrl}/weather`)
  }

  getPlanting(location:string, space:string) {
    const body = location + space;
    return this.http.get(`${this.baseUrl, (body)}/planting`)
  }

  getDiseaseManagment(disease:string) {
    const body = disease;
    return this.http.get(`${this.baseUrl, (body)}/disease`)
  }

}
