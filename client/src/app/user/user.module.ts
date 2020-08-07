import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswComponent } from './components/forgot-passw/forgot-passw.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswComponent
  ]
})
export class UserModule { }
