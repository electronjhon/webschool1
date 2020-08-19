import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

 
//Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from 'src/app/User/user.module';
import { MaterialModule } from 'src/app/material.module';


//Components
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/components/dashboard/dashboard.component';
import { CursosComponent } from '../../modules/components/cursos/cursos.component'


//Services
import { ApiCursosService } from 'src/app/modules/services/api-cursos.service';



//external




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CursosComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiCursosService],
})
export class DefaultModule { }
