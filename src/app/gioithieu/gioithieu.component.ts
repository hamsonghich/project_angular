import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.scss']
})
export class GioithieuComponent implements OnInit {

  constructor(public  dataServicesService: DataServicesService) { }

  ngOnInit(): void {
    console.log(  this.dataServicesService.infoCompany.phone[0]);
  }

}
