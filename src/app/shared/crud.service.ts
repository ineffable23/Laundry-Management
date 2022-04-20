import { Injectable } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  UpdateOrders(value: any) {
    throw new Error('Method not implemented.');
  }
  GetOrdersList: any;
  AddOrders(value: any) {
    throw new Error('Method not implemented.');
  }
  orderssRef: AngularFireList<any>;
  ordersRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create Orders
  AddOrderss(orders: OrdersComponent) {
    this.ordersRef.set({
      Name: orders.Name,
      email: orders.email,
      mobileNumber: orders.mobileNumber,
      clothType: orders.clothType,
      clothFabric: orders.clothFabric,
      clothColor: orders.clothColor,
    });
  }
  // Fetch Single Order Object
  GetOrderss(id: string) {
    this.ordersRef = this.db.object('orderss-list/' + id);
    return this.ordersRef;
  }
  // Fetch Orders List
  GetOrderssList() {
    this.orderssRef = this.db.list('orderss-list');
    return this.orderssRef;
  }
  // Update Orders Object
  UpdateOrderss(orders: OrdersComponent) {
    this.ordersRef.update({
      Name: orders.Name,
      email: orders.email,
      mobileNumber: orders.mobileNumber,
      clothType: orders.clothType,
      clothFabric: orders.clothFabric,
      clothColor: orders.clothColor,
    });
  }
  // Delete Orders Object
  DeleteOrderss(id: string) {
    this.ordersRef = this.db.object('orderss-list/' + id);
    this.ordersRef.remove();
  }
}