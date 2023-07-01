import { NgModule } from '@angular/core';
import { LawnWizardBusinessComponent } from './lawn-wizard-business.component';
import { RegisterEmployeeModule } from './modules/register-employee.module';
import { BusinessDashboardModule } from './modules/business-dashboard.module';
import { BusinessNavbarModule } from './modules/business-navbar.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LawnWizardBusinessComponent,
  ],
  imports: [
    RegisterEmployeeModule,
    BusinessDashboardModule,
    BusinessNavbarModule,
    RouterModule
  ],
  exports: [
    LawnWizardBusinessComponent
  ],
  providers: [
  ]
})
export class LawnWizardBusinessModule { }
