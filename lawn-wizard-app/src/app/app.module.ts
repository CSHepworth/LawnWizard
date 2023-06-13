import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from 'projects/lawn-wizard-landing/src/public-api';
import { LawnWizardLandingModule } from 'projects/lawn-wizard-landing/src/lib/lawn-wizard-landing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    LawnWizardLandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
