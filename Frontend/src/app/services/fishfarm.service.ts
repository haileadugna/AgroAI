import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FishfarmService {

  constructor() { }

  getListText() {
    return [" Enter your avealible waater size and your location to Generative personalized planting guide. suggesting suitable crops, planting times, and care instructions based on local climate and solutions conditions.",
    "Submit any symptoms observed the plants to be provided with insights an potantial pests or disease along with natural remedies or recommended treatments."
    ]
  }

  getTemperature() {
    return "sunny 25°C"
  }

  getSuggestion() {
    return "suggesting suitable crops, planting times, and care instructions based on local climate and solutions conditions."
  }

  getFishing() { 
    return "Enter your avealible space and your location to Generative personalized planting guide. suggesting suitable crops, planting times, and care instructions based on local climate and solutions conditions."
  }

  getDiseaseManagment() {

    return "Enter your avealible space and your location to Generative personalized planting guide. suggesting suitable crops, planting times, and care instructions based on local climate and solutions conditions."
  }
}
