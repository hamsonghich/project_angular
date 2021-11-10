import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-banner-sales',
  templateUrl: './banner-sales.component.html',
  styleUrls: ['./banner-sales.component.scss']
})
export class BannerSalesComponent implements OnInit {

  constructor(public dataServicesService: DataServicesService) { }

  ngOnInit(): void {
  }

}
