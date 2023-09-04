import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FishfarmService {

  private baseUrl = 'http://localhost:3000/fish'; // Assuming your backend's base URL

  constructor(private http: HttpClient) { }

  getListText() {
    return [
      "Enter your available water size and your location to generate personalized planting guide, suggesting suitable crops, planting times, and care instructions based on local climate and soil conditions.",
      "Submit any symptoms observed in the plants to receive insights on potential pests or diseases, along with natural remedies or recommended treatments."
    ];
  }

  getTemperature() {
    // You can fetch temperature from the backend if available
    return this.http.get(`${this.baseUrl}/temperature`);
  }

  getSuggestion() {
    return this.http.get(`${this.baseUrl}/suggestion`);
  }

  getFishing(location: string, waterSize: string) { 
    const params = new HttpParams()
      .set('location', location)
      .set('waterSize', waterSize);
    return this.http.get(`${this.baseUrl}/fishing`, { params });
    
  }

  getDiseaseManagment(disease: string, fishtype: string) {
    const params = new HttpParams()
      .set('disease', disease)
      .set('fishtype', fishtype);

    return this.http.get(`${this.baseUrl}/disease-management`);
  }
}
