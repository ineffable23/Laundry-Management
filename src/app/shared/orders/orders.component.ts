import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

// export interface Orders {
//   $key: string;
//   Name: string;
//   email: string
//   mobileNumber: Number;
//   clothType: string;
//   clothFabric: string;
//   clothColor: string;
// }

export class OrdersComponent implements OnInit {

  $key: string;
  Name: string;
  email: string
  mobileNumber: Number;
  clothType: string;
  clothFabric: string;
  clothColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
