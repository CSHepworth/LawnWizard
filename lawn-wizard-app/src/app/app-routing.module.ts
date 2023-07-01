import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDashboardComponent } from 'projects/lawn-wizard-business/src/lib/components/business-dashboard/business-dashboard.component';
import { RegisterEmployeeComponent } from 'projects/lawn-wizard-business/src/lib/components/register-employee/register-employee.component';
import { LawnWizardBusinessComponent } from 'projects/lawn-wizard-business/src/lib/lawn-wizard-business.component';

import { 
  AboutComponent, 
  CareersComponent, 
  DashboardComponent, 
  LandscapingComponent, 
  LawnWizardLandingComponent, 
  LawncareComponent, 
  PestControlComponent 
} from 'projects/lawn-wizard-landing/src/public-api';

const routes: Routes = [
  { path: 'official', 
    component: LawnWizardLandingComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'lawncare', component: LawncareComponent },
      { path: 'landscaping', component: LandscapingComponent },
      { path: 'pest-control', component: PestControlComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'about', component: AboutComponent }
    ]   
  },
  { path: '', redirectTo: '/official/dashboard', pathMatch: 'full' },
  { path: 'business',
    component: LawnWizardBusinessComponent,
    children: [
      { path: 'dashboard', component: BusinessDashboardComponent },
      { path: 'register', component: RegisterEmployeeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
