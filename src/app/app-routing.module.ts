import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoadLocationsComponent} from "./pages/load-locations/load-locations.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";


const routes:Routes =[
  {
    path:'',
    redirectTo:'load-locations',
    pathMatch:'full',
  },
  {
    path:'load-locations',
    component:LoadLocationsComponent,
    pathMatch:'full'
  },
  {
    path:'about-me',
    component:AboutMeComponent,
    pathMatch:'full'
  }
 ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{useHash:true}),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
