import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss']
})
export class FooterMainComponent implements OnInit {
  public click = 0;
  constructor(public dataServicesService: DataServicesService) { }

  ngOnInit(): void {
    $(document).ready(() => {
     // const num = $('.productList ul li').length;
     // $('.productList ul li:nth-child(num)').css({"display": "none"});
     // console.log('num' + num);
    });
    console.log(this.dataServicesService.listProduct);
    console.log(this.dataServicesService.aa);
  }
  public raiseClick(): any{
    this.click = this.click + 1;
  }
}

