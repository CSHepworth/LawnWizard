import { NgModule } from '@angular/core';
import { LawnWizardBusinessComponent } from './lawn-wizard-business.component';
import { RegisterEmployeeModule } from './register-employee/register-employee.module';



@NgModule({
  declarations: [
    LawnWizardBusinessComponent,
  ],
  imports: [
    RegisterEmployeeModule,
    
  ],
  exports: [
    LawnWizardBusinessComponent
  ]
})
export class LawnWizardBusinessModule { }
