import {Component, HostListener, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {DataServicesService} from '../services/data-services.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: Observable<string[]> | any;
  constructor(public dataServicesService: DataServicesService) {
  }
  ngOnInit(): void {
    $(document).ready(() => {
      $('#top-header__right--menu').click(() => {
        $('.container-listMenuTop').toggleClass('active');
      });
    });
    $(window).resize(() => {
        const screenWidth = $(window).width();
        console.log('width:' +  screenWidth);
        if (screenWidth as number  < 720) {
            console.log('nho');
            $('#top-header__right--menu').show();
            $('#screenPC').hide();
            $('#screenMobile').show();
          }
          else if  (screenWidth as number >= 720 ) {
            console.log('to');
            $('#top-header__right--menu').hide();
            $('#screenPC').show();
            $('#screenMobile').hide();
          }
      });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
