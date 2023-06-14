import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, DashboardComponent, LandscapingComponent, LawnWizardLandingComponent, LawncareComponent, PestControlComponent } from 'projects/lawn-wizard-landing/src/public-api';

const routes: Routes = [
  { path: 'official', 
    component: LawnWizardLandingComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'lawncare', component: LawncareComponent },
      { path: 'landscaping', component: LandscapingComponent },
      { path: 'pest-control', component: PestControlComponent },
      { path: 'about', component: AboutComponent }
    ]   
  },
  { path: '', redirectTo: '/official', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
