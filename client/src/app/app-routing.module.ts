import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './User/components/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/components/dashboard/dashboard.component';
import { CursosComponent } from './modules/components/cursos/cursos.component';
import { PostsComponent } from './modules/components/posts/posts.component';
import { Page404Component } from './error/page404/page404.component';


/*
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
      path: 'posts',
    component: PostsComponent
  }]
}];
*/
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'home',
    component: DefaultComponent, //TODO: only users auth
    children: [{
      path: 'perfil',
      component: DashboardComponent //TODO: only users auth
    }, {
      path: 'cursos',
      component: CursosComponent  //TODO: only users auth
    },
    {
      path: 'posts',
      component: PostsComponent  //TODO: only users auth
    }]
  },
  {
    path: '**',
    component: Page404Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
