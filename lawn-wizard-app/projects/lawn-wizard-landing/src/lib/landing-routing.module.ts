import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LawncareComponent } from './lawncare/lawncare/lawncare.component';
import { LandscapingComponent } from './landscaping/landscaping/landscaping.component';
import { PestControlComponent } from './pest-control/pest-control/pest-control.component';

const landingRoutes: Routes = [
  { path: 'official/dashboard', component: DashboardComponent },
  { path: 'official', redirectTo: '/official/dashboard', pathMatch: 'full'},
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
