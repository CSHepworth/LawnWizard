import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PestControlComponent } from './pest-control/pest-control.component';



@NgModule({
  declarations: [
    PestControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PestControlComponent
  ]
})
export class PestControlModule { }
