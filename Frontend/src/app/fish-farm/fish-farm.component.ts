import { Component, OnInit } from '@angular/core';
import { FishfarmService } from '../services/fishfarm.service';

@Component({
  selector: 'app-fish-farm',
  templateUrl: './fish-farm.component.html',
  styleUrls: ['./fish-farm.component.css']
})
export class FishFarmComponent implements OnInit {

  locationinput: string = "";
  watersizeinput: string = "";
  diseaseinput: string = "";
  fishfarmreturn: any;
  suggestion: any;
  diseasemanagmentreturn: any;
  temperature: any;
  listText: string[] = [];
  location:string='';
  watersize: string='';
  disease: string="";

  constructor(private fishService: FishfarmService) { }


  getPassFishing(){
    this.location = this.locationinput;
    this.watersize = this.watersizeinput;
  }

  getPassDisease(){
    this.disease = this.diseaseinput
  }

  ngOnInit(): void {

    
    this.fishService.getFishing(this.location, this.watersizeinput).subscribe((data: any) => {
      this.fishfarmreturn = data;
    });

    this.fishService.getSuggestion().subscribe((data: any) => {
      this.suggestion = data;
    });

    this.fishService.getDiseaseManagment(this.disease).subscribe((data: any) => {
      this.diseasemanagmentreturn = data;
    });

    this.fishService.getTemperature().subscribe((data: any) => {
      this.temperature = data;
    });

    this.listText = this.fishService.getListText();
  }
}
