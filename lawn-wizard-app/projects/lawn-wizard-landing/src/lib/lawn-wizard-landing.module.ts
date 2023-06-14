import { NgModule } from '@angular/core';
import { LawnWizardLandingComponent } from './lawn-wizard-landing.component';
import { AboutModule } from './about/about.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LandscapingModule } from './landscaping/landscaping.module';
import { LawncareModule } from './lawncare/lawncare.module';
import { NavbarModule } from './navbar/navbar.module';
import { PestControlModule } from './pest-control/pest-control.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LawnWizardLandingComponent
  ],
  imports: [
    AboutModule,
    DashboardModule,
    LandscapingModule,
    LawncareModule,
    NavbarModule,
    PestControlModule,
    RouterModule
  ],
  exports: [
    LawnWizardLandingComponent
  ]
})
export class LawnWizardLandingModule { }
