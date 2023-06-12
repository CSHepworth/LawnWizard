import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavComponent,
    NavbarComponent
  ],
  imports: [
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
