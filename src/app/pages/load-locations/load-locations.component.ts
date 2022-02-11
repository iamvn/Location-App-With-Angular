import {Component, OnInit} from '@angular/core';
import {LoadLocationsService} from "./load-locations.service";
import {HttpResponse} from "@angular/common/http";
import {LocationDetails} from "../load-locations-modal";
import {UtilsService} from "../../utils/utils.service";

@Component({
  selector: 'app-load-locations',
  templateUrl: './load-locations.component.html',
  styleUrls: ['./load-locations.component.css']
})
export class LoadLocationsComponent implements OnInit {
  public locationData: Array<LocationDetails> | undefined;
  public recordPerPageSelection: Array<number> = [15, 25, 50, 100, 150];
  public loading:boolean=false;
  public pageSize: number = 15;
  public page: number =0;
  constructor(private loadLocationDataService:LoadLocationsService) {
    UtilsService.searchLocationEventEmitter.subscribe((search)=>{
      this.searchLocationByPostal(search);
    })
  }
  LoadLoactionData(){
    this.loading=true;
    this.loadLocationDataService.loadLocationData().subscribe((res:HttpResponse<any>) =>{
      this.locationData =res.body;
      this.loading=false;
    },
      error => {
      this.loading=false;
      console.log(error);
      })
  }

  searchLocationByPostal(postalCode:string){
    this.loading=true;
    this.loadLocationDataService.searchLocationByPostal(postalCode).subscribe((res:HttpResponse<any>)=>{
        this.locationData =res.body;
        this.loading=false;
    },
      error => {
      this.loading=false;
      console.log(error);
      })
  }


  setSelectedRecordsChoice(perPageSelection: any, currentPage: number) {
    this.pageSize = perPageSelection.target.value;
    this.page = currentPage;
  }

  ngOnInit(): void {
    this.LoadLoactionData();
  }

}
