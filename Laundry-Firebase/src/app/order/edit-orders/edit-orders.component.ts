import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.scss'],
})
export class EditOrdersComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.updateOrderssData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetOrderss(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }
  updateOrderssData() {
    throw new Error('Method not implemented.');
  }
  get Name() {
    return this.editForm.get('Name');
  }
  get email() {
    return this.editForm.get('email');
  }
  get mobileNumber() {
    return this.editForm.get('mobileNumber');
  }
  get clothType() {
    return this.editForm.get('clothType');
  }
  get clothFabric() {
    return this.editForm.get('clothFabric');
  }
  get clothColor() {
    return this.editForm.get('clothColor');
  }
  updateOrdersData() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
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
  goBack() {
    this.location.back();
  }
  updateForm() {
    this.crudApi.UpdateOrderss(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['Name'].value + 'order detail updated successfully'
    );
    this.router.navigate(['view-orderss']);
  }
}