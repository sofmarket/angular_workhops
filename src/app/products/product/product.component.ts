import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private http: HttpClient) {}

  @Input('product') product:Product;
  @Output('onBuy') onbuy = new EventEmitter();

  incementLike() {
    this.product.like++;
    this.http.post('http://localhost:5500/like', { id: this.product.id }).subscribe((res:any) => {
      console.log(res);
    })
  }

  buy(){
    this.onbuy.emit(this.product);
  }

}
