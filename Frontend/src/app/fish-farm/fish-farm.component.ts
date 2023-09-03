import { Component, OnInit } from '@angular/core';
import { FishfarmService } from '../services/fishfarm.service';

@Component({
  selector: 'app-fish-farm',
  templateUrl: './fish-farm.component.html',
  styleUrls: ['./fish-farm.component.css']
})
export class FishFarmComponent implements OnInit{

  locationinput : string = "";
  watersizeinput = "";
  diseaseinput = "";
  

  constructor(private fishService: FishfarmService) { }

  ngOnInit(): void {
    
    console.log(this.diseaseinput);
    console.log(this.watersizeinput);
    console.log(this.locationinput);
    // throw new Error('Method not implemented.');
  }

  fishfarmreturn = this.fishService.getFishing();
  suggestion = this.fishService.getSuggestion();
  diseasemanagmentreturn = this.fishService.getDiseaseManagment();
  temperature = this.fishService.getTemperature();
  listText = this.fishService.getListText();

  

}