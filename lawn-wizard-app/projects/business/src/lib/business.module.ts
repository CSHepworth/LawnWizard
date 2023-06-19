import { NgModule } from '@angular/core';
import { BusinessComponent } from './business.component';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    LoginModule
  ],
  exports: [
    BusinessComponent
  ]
})
export class BusinessModule { }
