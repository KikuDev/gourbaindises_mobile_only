import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Array<Object> = [];

  constructor(private ProductsDataService: ProductsDataService) {
    this.ProductsDataService.getJSON().subscribe(data => this.products = data);
  }

  ngOnInit() {
  }

  filterCat(cat: string) {
    console.log('choosen category is ' + cat);
    if (cat === 'Toutes les catégories') {
      this.ProductsDataService.getJSON().subscribe(data => this.products = data);
      return;
    }
    this.ProductsDataService.getJSON().subscribe(data => {
      this.products = [];
      for (const i in data) {
        if (data.hasOwnProperty(i)) {
          const element = data[i];
          if (element['tax:product_cat'].includes(cat)) {
            this.products.push(element);
          }
        }
      }
    });
  }
}
