import { Component} from '@angular/core';
import {UtilsService} from "../../utils/utils.service";
import {debounceTime, Subject} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public currentUrl:string='';
  searchByPostalCode = new Subject<string>();
  constructor(private route:Router) {
    this.route.events.subscribe(res =>{
      if (res instanceof NavigationEnd) {
        this.currentUrl=res.url;
      }
    })
  }
  searchLocationByPostalCode(input:any){
    let search = input.target.value;
    this.searchByPostalCode.next(search);
    this.searchByPostalCode.pipe(debounceTime(300)).subscribe((postalCode)=>{
      UtilsService.searchLocationEventEmitter.next(postalCode);
    })
  }

}
