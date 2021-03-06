import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule, HttpModule,   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
