import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule} from './app-routing.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { DataService } from './core/data.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainPageComponent } from './features/main-page/main-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
