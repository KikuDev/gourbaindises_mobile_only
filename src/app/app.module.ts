import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { FormsModule }   from '@angular/forms';

import { ProductsDataService } from './products-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FiltersComponent } from './filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    NavbarComponent,
    ProductDetailsComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    HttpModule,
    NgHttpLoaderModule,
    FormsModule,
    NgxQRCodeModule
  ],
  providers: [ProductsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
