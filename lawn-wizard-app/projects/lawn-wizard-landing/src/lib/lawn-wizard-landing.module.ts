import { NgModule } from '@angular/core';
import { LawnWizardLandingComponent } from './lawn-wizard-landing.component';
import { 
  AboutModule, 
  DashboardModule,
  LandscapingModule, 
  LawncareModule, 
  NavbarModule, 
  PestControlModule 
} from 'lawn-wizard-landing';



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
    PestControlModule
  ],
  exports: [
    LawnWizardLandingComponent
  ]
})
export class LawnWizardLandingModule { }
