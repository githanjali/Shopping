import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ProductsService} from '../products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products :any;
  
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.product;
  }
  changeQuantity(event){
    console.log("event is"+event);
  }
  addToCart(product){
    console.log(product);
  }

}
