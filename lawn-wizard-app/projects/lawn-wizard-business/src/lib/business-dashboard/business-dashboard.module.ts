import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDashboardComponent } from './business-dashboard/business-dashboard.component';



@NgModule({
  declarations: [
    BusinessDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusinessDashboardComponent
  ]
})
export class BusinessDashboardModule { }
