import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { Page404Component } from './error/page404/page404.component';
import { MaterialModule } from './material.module';
import { TruncateTextPipe } from './pipes/truncate-text.pipe'




@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    TruncateTextPipe
   
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MaterialModule
  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
