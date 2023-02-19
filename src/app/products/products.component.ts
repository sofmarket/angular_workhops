import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient){ }

  ngOnInit(){
    this.http.get('http://localhost:5500/products').subscribe((products:any) => {
      this.list = products;
    });
  }

  buy(product:Product){
    product.quantity--;
  }

  filter() {

  }

}
