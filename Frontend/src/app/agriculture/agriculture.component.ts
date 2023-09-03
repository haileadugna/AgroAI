import { Component } from '@angular/core';
import { AgricultureService } from '../services/agriculture.service';

@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.css']
})
export class AgricultureComponent {

  constructor(private agriServices: AgricultureService) { }
  suggestion = this.agriServices.getSuggestion();
  plantingreturn = this.agriServices.getPlanting();
  diseasemanagmentreturn = this.agriServices.getDiseaseManagment();
  temperature = this.agriServices.getTemperature();
  listText = this.agriServices.getListText();
}
