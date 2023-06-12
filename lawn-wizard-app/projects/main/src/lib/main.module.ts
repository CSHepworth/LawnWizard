import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent
  ],
  imports: [
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
