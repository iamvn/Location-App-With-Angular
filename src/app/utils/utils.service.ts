import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http:HttpClient) { }
  public static searchLocationEventEmitter = new Subject<string>();
  getRequest(url: any, headers: any) {
    return this.http.get(url, {headers: headers, observe: 'response'});
  }
}
