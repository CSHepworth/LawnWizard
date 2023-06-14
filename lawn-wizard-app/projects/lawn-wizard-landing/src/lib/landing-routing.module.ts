import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, DashboardComponent, LandscapingComponent, LawncareComponent, PestControlComponent } from 'lawn-wizard-landing';

const landingRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lawncare', component: LawncareComponent },
  { path: 'landscaping', component: LandscapingComponent },
  { path: 'pest-control', component: PestControlComponent },
  { path: 'about', component: AboutComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(landingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }
