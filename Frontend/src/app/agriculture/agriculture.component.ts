import { Component, OnInit } from '@angular/core';
import { AgricultureService } from '../services/agriculture.service';

@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.css']
})
export class AgricultureComponent implements OnInit {

  locationinput:string='';
  location: string="";
  spaceinput:string='';
  space:string='';
  diseaseinput : string="";
  disease:string='';
  diseasemanagmentreturn: any;
  listText: string[] = [];
  plantingreturn: any;
  temperature: any;
  suggestion: any;


  constructor(private agriServices: AgricultureService) { }
  ngOnInit(): void {
    
    this.agriServices.getDiseaseManagment(this.disease).subscribe((data:any) =>{
      this.diseasemanagmentreturn = data
    });

    this.agriServices.getPlanting(this.location, this.space).subscribe((data:any) =>{
      this.plantingreturn = data
    });

    this.suggestion = this.agriServices.getSuggestion();

    this.temperature = this.agriServices.getTemperature();

    this.listText = this.agriServices.getListText();
  }


}
