import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LawncareComponent } from './lawncare/lawncare.component';



@NgModule({
  declarations: [
    LawncareComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LawncareComponent
  ]
})
export class LawncareModule { }
