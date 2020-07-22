import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/auth/login/login.component';
import { NavbarComponent } from './modules/navegation/navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: NavbarComponent} //TODO: only user auth */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
