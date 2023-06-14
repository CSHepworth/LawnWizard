import { NgModule } from '@angular/core';
import { LawnWizardLandingComponent } from './lawn-wizard-landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { AboutModule } from './about/about.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LandscapingModule } from './landscaping/landscaping.module';
import { LawncareModule } from './lawncare/lawncare.module';
import { NavbarModule } from './navbar/navbar.module';
import { PestControlModule } from './pest-control/pest-control.module';



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
    LandingRoutingModule
  ],
  exports: [
    LawnWizardLandingComponent
  ]
})
export class LawnWizardLandingModule { }
