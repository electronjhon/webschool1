import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { NewPaswComponent } from './new-pasw/new-pasw.component';


@NgModule({
  declarations: [LoginComponent, NewPassComponent, NewPaswComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
