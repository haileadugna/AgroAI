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
  water: string='';
  disease: string="";
  fishtypeinput: string= "";
  fishtype:string = "";

  constructor(private fishService: FishfarmService) { }


  getPassFishing(){
    this.location = this.locationinput;
    this.water = this.watersizeinput;
  }

  getPassDisease(){
    this.disease = this.diseaseinput
    this.fishtype = this.fishtypeinput;
  }

  ngOnInit(): void {

    
    this.fishService.getFishing(this.location, this.water).subscribe((data: any) => {
      this.fishfarmreturn = data;
    });

    this.fishService.getSuggestion().subscribe((data: any) => {
      this.suggestion = data;
    });

    this.fishService.getDiseaseManagment(this.disease, this.fishtype).subscribe((data: any) => {
      this.diseasemanagmentreturn = data;
    });

    this.listText = this.fishService.getListText();
  }
}
