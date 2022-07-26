import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeatureWorkComponent } from './feature-work/feature-work.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { RouterModule,Routes } from '@angular/router';

const route:Routes=[
  {path:'about-us',component:AboutUsComponent},
  {path:'feature-work', component:FeatureWorkComponent},
  {path:'our-services', component:OurServicesComponent}

]



@NgModule({
  declarations: [
  // HomeComponent,
    AboutUsComponent,
    FeatureWorkComponent,
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HomeModule { }
