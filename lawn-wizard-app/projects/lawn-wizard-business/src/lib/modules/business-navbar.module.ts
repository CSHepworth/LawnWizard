import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessNavbarComponent } from '../components/business-navbar/business-navbar.component';



@NgModule({
  declarations: [
    BusinessNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusinessNavbarComponent
  ]
})
export class BusinessNavbarModule { }
