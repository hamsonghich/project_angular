import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.scss']
})
export class TintucComponent implements OnInit {

  constructor(public dataServicesService: DataServicesService) { }

  ngOnInit(): void {
  }

}
