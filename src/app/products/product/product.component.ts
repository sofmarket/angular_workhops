import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input('product') product:Product;
  @Output('onBuy') onbuy = new EventEmitter();

  incementLike() {
    this.product.like++;
  }

  buy(){
    this.onbuy.emit(this.product);
  }

}
