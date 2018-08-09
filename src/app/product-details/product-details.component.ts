import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: object = {};
  QRIcon: string = '../../assets/qrcode.svg';
  QReady: boolean = false;
  currentUrl: string;
  productContent: Array<string> = [];
  isOpen: boolean = false;

  constructor(
    private ProductsDataService: ProductsDataService, 
    private route: ActivatedRoute) {
  }

  displayQR() {
    this.QReady = !this.QReady;
  }

  ngOnInit() {
    this.ProductsDataService.getJSON().subscribe(data => {
      for (const i in data) {
        if (data.hasOwnProperty(i)) {
          const element = data[i];
          if (Number(element.ID) === Number(this.route.snapshot.paramMap.get('id'))) {
            const contents = element.post_content.split('\n');
            this.product = element;
            this.currentUrl = window.location.href;
            for (let j = 0; j < contents.length; j++) {
              if (contents[j].length !== 0) {
                this.productContent.push(contents[j]);
              }
            }
          }
        }
      }
    });
  }

  toggleContent() {
    this.isOpen = !this.isOpen;
  }
}
