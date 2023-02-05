import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  addEvent: Subject<any> = new Subject();

  listPoducts: Product[] = [
    {id: 1, title: 'product 1', quantity: 10, price: 10, like: 0},
    {id: 2, title: 'product 2', quantity: 10, price: 10, like: 0},
    {id: 3, title: 'product 3', quantity: 10, price: 10, like: 0},
    {id: 4, title: 'product 4', quantity: 10, price: 10, like: 0}
  ];

  add(product: Product) {
    this.listPoducts.push(product);
  }

  getProducts() {
    return this.listPoducts;
  }

}
