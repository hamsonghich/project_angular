import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataServicesService} from '../services/data-services.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
  private id: any;
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[0];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public choosePriceSortArr = this.priceSortArr[0];
  public productType: any[] = [];
  constructor(public activatedRoute: ActivatedRoute, public dataServicesService: DataServicesService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions typedef
    const num = this.productType.length;
    console.log('num: ' + num);
    // tslint:disable-next-line:only-arrow-functions typedef
    $( document ).ready(function() {
      const i = 0;
      // tslint:disable-next-line:no-shadowed-variable
      for (let i = 0; i < num; i++){
        // tslint:disable-next-line:only-arrow-functions typedef
        $('.checkHeart' + i).click(function(){
          $('.checkHeart' + i).toggleClass('active');
        });
      }
      // tslint:disable-next-line:only-arrow-functions typedef
    });
    console.log(this.getProductDetailsId());
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.dataServicesService.productDetailsList.thungnhuaDanpla.length; i++){
      if (this.dataServicesService.productDetailsList.thungnhuaDanpla[i].typeName === this.getProductDetailsId()){
        this.productType.push(this.dataServicesService.productDetailsList.thungnhuaDanpla[i]);
      }
    }
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0 ; i < this.dataServicesService.productDetailsList.vachnhuaDanpla.length; i++){
      if (this.dataServicesService.productDetailsList.vachnhuaDanpla[i].typeName === this.getProductDetailsId()){
        this.productType.push(this.dataServicesService.productDetailsList.vachnhuaDanpla[i]);
      }
    }
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0 ; i < this.dataServicesService.productDetailsList.xopEvaPEFoam.length; i++){
      if (this.dataServicesService.productDetailsList.xopEvaPEFoam[i].typeName === this.getProductDetailsId()){
        this.productType.push(this.dataServicesService.productDetailsList.xopEvaPEFoam[i]);
      }
    }
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0 ; i < this.dataServicesService.productDetailsList.xopBongKhi.length; i++){
      if (this.dataServicesService.productDetailsList.xopBongKhi[i].typeName === this.getProductDetailsId()){
        this.productType.push(this.dataServicesService.productDetailsList.xopBongKhi[i]);
      }
    }
  }
  public getProductDetailsId(): any {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    return this.id;
  }
  public exit(): any {
    setTimeout(() => {
      location.reload();
    }, 0);
  }

}
