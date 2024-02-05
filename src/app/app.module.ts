import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestGlobalCSSComponent } from './components/test-global-css/test-global-css.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component'

@NgModule({
  declarations: [
    AppComponent,
    TestGlobalCSSComponent,
    HeaderComponent,
    HomeComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
