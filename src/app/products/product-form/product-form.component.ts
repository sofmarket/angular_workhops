import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product: Product;
  @Output('ajout') ajout: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log('component product form initiated');
    this.product = new Product();
  }

  saveProduct() {
    this.ajout.emit(this.product);
  }

}
