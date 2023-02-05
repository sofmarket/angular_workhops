import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  list: Product[];
  maxPrice:any = '';

  constructor(private productsService: ProductsService){ }

  ngOnInit(){
    this.list = this.productsService.getProducts();
    this.productsService.addEvent.subscribe((data) => {
      console.log(data);
    })
  }

  buy(product:Product){
    product.quantity--;
  }

  filter() {

  }

}
