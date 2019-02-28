import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
// the above imports are typescript imports 
@NgModule({
  declarations: [
    AppComponent
  ],
  //the below imports are of angular
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
