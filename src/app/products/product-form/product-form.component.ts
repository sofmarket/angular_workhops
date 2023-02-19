import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';
import {Router} from "@angular/router"

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  product: Product;
  @Output('ajout') ajout: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log('component product form initiated');
    this.product = new Product();
  }

  saveProduct() {
    console.log(this.product);
    this.http.post('http://localhost:5500/add', this.product).subscribe((res:any) => {

      if(res.ok == true) {
        this.router.navigate(['/products']);
      }

    });
  }

}
