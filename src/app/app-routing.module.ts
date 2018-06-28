import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  MainPageComponent } from './features/main-page/main-page.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
