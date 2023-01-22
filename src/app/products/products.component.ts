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
    this.listProducts = [ ];
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

  addProdcut(product:Product) {
    this.list.push(product);
  }

}
