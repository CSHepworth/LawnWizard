import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawnWizardLandingComponent } from 'projects/lawn-wizard-landing/src/lib/lawn-wizard-landing.component';

const routes: Routes = [
  { path: '', component: LawnWizardLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
