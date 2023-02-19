import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  add(product: Product) {
    // this.listPoducts.push(product);
  }

  getProducts() {
    return this.http.get('http://localhost:5500/products');
  }

}
