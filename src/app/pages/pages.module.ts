import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadLocationsComponent} from "./load-locations/load-locations.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [LoadLocationsComponent,
    AboutMeComponent],
  imports: [
    CommonModule,
    NgbPaginationModule
  ],
  exports: [
    LoadLocationsComponent,
    AboutMeComponent,
    NgbPaginationModule
  ]
})
export class PagesModule { }
