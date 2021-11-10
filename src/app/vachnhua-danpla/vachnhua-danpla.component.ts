import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-vachnhua-danpla',
  templateUrl: './vachnhua-danpla.component.html',
  styleUrls: ['./vachnhua-danpla.component.scss']
})
export class VachnhuaDanplaComponent implements OnInit {
  constructor(public dataServicesService: DataServicesService) {
  }
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[0];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public choosePriceSortArr = this.priceSortArr[0];
  ngOnInit(): void {
    console.log(this.dataServicesService.productDetailsListTotal);
    console.log(this.chooseItemOfPage);
    const num = this.dataServicesService.productDetailsList.thungnhuaDanpla.length;
    // tslint:disable-next-line:only-arrow-functions typedef
    $( document ).ready(function() {
      $(window).scrollTop(0);
    });
  }

}
