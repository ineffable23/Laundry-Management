import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss'],
})
export class AddOrdersComponent implements OnInit {
  public ordersForm: FormGroup;
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}
  ngOnInit() {
    this.crudApi.GetOrdersList();
    this.orderForm();
  }
  orderForm() {
    this.ordersForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      // lastName: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      clothType: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9-.]+$')]],
      clothFabric: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9-.]+$')]],
      clothColor: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9-.]+$')]],
    });
  }
  get Name() {
    return this.ordersForm.get('Name');
  }
  // get lastName() {
  //   return this.studentForm.get('lastName');
  // }
  get email() {
    return this.ordersForm.get('email');
  }
  get mobileNumber() {
    return this.ordersForm.get('mobileNumber');
  }
  get clothType() {
    return this.ordersForm.get('clothType');
  }
  get clothFabric() {
    return this.ordersForm.get('clothFabric');
  }
  get clothColor() {
    return this.ordersForm.get('clothColor');
  }
  ResetForm() {
    this.ordersForm.reset();
  }
  submitOrdersData() {
    this.crudApi.AddOrderss(this.ordersForm.value);
    this.toastr.success(
      this.ordersForm.controls['Name'].value + ' your cloth successfully added!'
    );
    this.ResetForm();
  }
}