import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';

import {
  CommonModule
} from '@angular/common';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderNavigationComponent } from './shared/header-navigation/header-navigation.component';

import { Approutes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderNavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(Approutes, { useHash: true }),
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
