import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from '../header/header.component';

const routes: Routes = [
    {
      path:'',
      component: HeaderComponent
    }
  ];
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }