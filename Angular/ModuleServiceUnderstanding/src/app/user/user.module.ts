//You need different module not everytime they are just used when you want to 
//differentiate between different user for eg. then you create a module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule { }
