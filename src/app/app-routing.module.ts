import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { PuneComponent } from './pune/pune.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'pune',component:PuneComponent},
  {path:'mumbai',component:MumbaiComponent},
  {path:'',component:HomeComponent},
  {
    path:'home',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)
  },
  {
    path:'our-services', loadChildren:()=>import('./our-services/our-services.module').then(mod=>mod.OurServicesModule)
  },
  {
    path:'port-folio', loadChildren:()=>import('./port-folio/portfolio.module').then(mod=>mod.PortfolioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
