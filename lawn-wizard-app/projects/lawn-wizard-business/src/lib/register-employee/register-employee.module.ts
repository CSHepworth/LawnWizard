import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';



@NgModule({
  declarations: [
    RegisterEmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterEmployeeComponent
  ]
})
export class RegisterEmployeeModule { }
