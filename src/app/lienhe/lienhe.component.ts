import {Component, OnInit, ViewChild} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.scss']
})
export class LienheComponent implements OnInit {
  infoCustomerForm: FormGroup| any;
  constructor(public dataServicesService: DataServicesService, public formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.infoCustomerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.minLength(10), Validators.required]],
      content: ['', Validators.required]
    });
  }
  public onSubmit(): any{
    console.log(this.infoCustomerForm.value);
    alert('Bạn đã gửi yêu cầu thành công !');
    this.infoCustomerForm.reset();
  }
}

