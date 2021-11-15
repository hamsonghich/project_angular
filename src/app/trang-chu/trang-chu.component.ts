import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

  constructor(public dataServicesService: DataServicesService) { }
  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };
  customOptionsItem: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 2
      },
      400: {
        items: 2
      },
      541: {
        items: 3
      },
      720: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  ngOnInit(): void {

  }

}
