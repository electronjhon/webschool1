import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegationRoutingModule } from './navegation-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavegationRoutingModule
  ]
})
export class NavegationModule { }
