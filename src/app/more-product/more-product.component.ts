import {Component, ElementRef, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {NavigationEnd, Router} from '@angular/router';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-more-product',
  templateUrl: './more-product.component.html',
  styleUrls: ['./more-product.component.scss']
})
export class MoreProductComponent implements OnInit {

  constructor(public dataServicesService: DataServicesService, public router: Router) { }
  public page = 1;
  ngOnInit(): void {
  }
  public exit(): any {
    setTimeout(() => {
      location.reload();
    }, 0);
  }
}
