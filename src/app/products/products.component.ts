import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listProducts: Product[];
  list: Product[];
  maxPrice:any = '';

  ngOnInit(){
    this.listProducts = [
      {id:1, title:'TShirt 1', price: 18, quantity: 0, like: 0},
      {id:2, title:'TShirt 2', price: 21, quantity: 10, like: 0},
      {id:3, title:'TShirt 3', price: 12, quantity: 20, like: 0},
      {id:4, title:'TShirt 4', price: 10, quantity: 30, like: 0}
    ];
    this.list = this.listProducts;
  }

  buy(product:Product){
    console.log(product);
  }

  filter() {
    if(this.maxPrice == '') this.list = this.listProducts;
    else {
      this.list = [];
      for (let index = 0; index < this.listProducts.length; index++) {
        if(this.listProducts[index].price <= this.maxPrice)
          this.list.push(this.listProducts[index]);
      }
    }
  }

}
