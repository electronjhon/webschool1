import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/modules/components/dashboard/dashboard.component';
import { CursosComponent } from 'src/app/modules/components/cursos/cursos.component';
import { PostsComponent } from 'src/app/modules/components/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from 'src/app/User/user.module';
import { MaterialModule } from 'src/app/material.module';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CursosComponent,
    PostsComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UserModule,
    MaterialModule
  ]
})
export class DefaultModule { }
