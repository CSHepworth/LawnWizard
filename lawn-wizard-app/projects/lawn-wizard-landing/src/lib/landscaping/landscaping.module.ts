import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandscapingComponent } from './landscaping/landscaping.component';



@NgModule({
  declarations: [
    LandscapingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandscapingComponent
  ]
})
export class LandscapingModule { }
