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
  UpdateStudent(value: any) {
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
  // Fetch Single Student Object
  GetOrderss(id: string) {
    this.ordersRef = this.db.object('orderss-list/' + id);
    return this.ordersRef;
  }
  // Fetch Students List
  GetOrderssList() {
    this.orderssRef = this.db.list('orderss-list');
    return this.orderssRef;
  }
  // Update Student Object
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
  // Delete Student Object
  DeleteOrderss(id: string) {
    this.ordersRef = this.db.object('orderss-list/' + id);
    this.ordersRef.remove();
  }
}