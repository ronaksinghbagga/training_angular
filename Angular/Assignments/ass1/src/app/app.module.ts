import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { HttpClientModule } from '@angular/common/http';
import { CarlistserviceService } from './carlistservice.service';


@NgModule({
  declarations: [
    AppComponent,
    CardetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarlistserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
