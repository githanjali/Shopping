import { Component, OnInit } from '@angular/core';
import {ShareService} from '../services/share.service';
import { products } from '../products/product'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories: {};
  selectedCat: string;

  constructor(private sharedService : ShareService) { }

  ngOnInit(): void {
    this.listCategories();
  }
  
   async listCategories() {
      try{
     await this.sharedService.getCategories().subscribe((res) =>{
        this.categories = res;
        console.log('categories => ', this.categories);
      })}
      catch (error) {
        console.log(error);
      }
  }

  }


