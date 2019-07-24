import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-catlog',
  templateUrl: './catlog.component.html'
})
export class CatlogComponent implements OnInit {

  productList: any[] = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this._httpClient.get('assets/data/product.json').subscribe((res: any)=>{
      this.productList = res.response;
    });
  }


}
