import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { OrdersComponent } from 'src/app/shared/orders/orders.component'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  p: number = 1;
  Orders: OrdersComponent[];
  hideWhenNoOrders: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  
  constructor(
    public crudApi: CrudService,
    public toastr: ToastrService
    ){ }

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetOrderssList(); 
    s.snapshotChanges().subscribe(data => {
      this.Orders = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Orders.push(a as OrdersComponent);
      })
    })
  }
  dataState() {     
    this.crudApi.GetOrderssList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoOrders = false;
        this.noData = true;
      } else {
        this.hideWhenNoOrders = true;
        this.noData = false;
      }
    })
  }
  deleteOrderss(orders) {
    if (window.confirm('Are sure you want to delete this order ?')) { 
      this.crudApi.DeleteOrderss(orders.$key)
      this.toastr.success(orders.firstName + ' successfully deleted!');
    }
  }
}