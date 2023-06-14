import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawnWizardLandingComponent } from 'projects/lawn-wizard-landing/src/public-api';

const routes: Routes = [
  { path: 'official', component: LawnWizardLandingComponent },
  { path: '', redirectTo: '/official', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
