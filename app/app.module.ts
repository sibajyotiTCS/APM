import { NgModule } from '@angular/core';

import {  FormsModule } from '@angular/forms';

import { CommonModule  } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';

import { EmployeeModule } from './employee/employee.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    EmployeeModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
