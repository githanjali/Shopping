import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';

const routes: Routes = [
    {
      path:'',
      component: NavbarComponent
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [NavbarComponent],
  declarations: [
    NavbarComponent
  ]
})
export class NavbarModule { }
