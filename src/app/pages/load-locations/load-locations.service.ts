import { Injectable } from '@angular/core';
import {UtilsService} from "../../utils/utils.service";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoadLocationsService {

  constructor(private httpRequestMethod:UtilsService) { }

  public loadLocationData(){
    let url ="https://api.openbrewerydb.org/breweries?per_page=50";
    let headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded'
    })
  return this.httpRequestMethod.getRequest(url,headers);
  }


  public searchLocationByPostal(postal_code:any){
    let url =`https://api.openbrewerydb.org/breweries?by_postal=${postal_code}&per_page=50`;
    let headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded'
    })
    return this.httpRequestMethod.getRequest(url,headers);
  }

}
