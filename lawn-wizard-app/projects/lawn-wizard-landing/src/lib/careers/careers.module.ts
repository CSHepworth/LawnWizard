import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers/careers.component';



@NgModule({
  declarations: [
    CareersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CareersComponent
  ]
})
export class CareersModule { }
