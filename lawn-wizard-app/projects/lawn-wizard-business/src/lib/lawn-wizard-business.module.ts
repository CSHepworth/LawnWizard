import { NgModule } from '@angular/core';
import { LawnWizardBusinessComponent } from './lawn-wizard-business.component';
import { RegisterEmployeeModule } from './register-employee/register-employee.module';
import { BusinessDashboardModule } from './business-dashboard/business-dashboard.module';
import { BusinessNavbarModule } from './business-navbar/business-navbar.module';
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
