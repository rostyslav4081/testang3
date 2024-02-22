import { Component } from '@angular/core';

import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Order} from "../models/order";

import {InMemoryDataService} from "../in-memory-data.service";

import {OrderService} from "../services/order.service";
import {MessageService} from "primeng/api";

import {DelOrderComponent} from "../del-order/del-order.component";


import {AddEditOrderComponent} from "../add-edit-order/add-edit-order.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
  providers:[DialogService,MessageService]
})
export class OrdersComponent {
  orders: Order[]=[];
  cols!: any[];

  ref: DynamicDialogRef | undefined;
  constructor(private orderService: OrderService,private dialogService:DialogService,private inMemoryDataService:InMemoryDataService ) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((res: Order[]) => {
      this. orders = res;
      this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'numberOrder', header: 'Number Order' },
        { field: 'dateOrder', header: 'Date Order' },
        { field: 'value', header: 'Value' },
        { field: 'status', header: 'Status' },
        { field: 'options', header: 'Options'}
      ];
    });
  }

  openOrderDialog() {
    this.ref = this.dialogService.open(AddEditOrderComponent,{
      header:"New Order",
      width: "70%",
      contentStyle:{"max-height": "700px", "overflow":"auto"}

    })

    this.ref.onClose.subscribe((orderData: Order) => {
      if (orderData) {
        console.log(orderData);
        const orderId = this.inMemoryDataService.genIdOrder(this.orders);
        this.orders.push({...orderData,id:orderId} );

      }

    });
  }

  applyFilter(searcherString: string) {
    if(searcherString ===''){
      this.ngOnInit();
    }else {
      this.orders = this.orders.filter((customer) => {
        return (
          customer.numberOrder.toLowerCase().includes(searcherString.toLowerCase()) ||
          customer.dateOrder.toLowerCase().includes(searcherString.toLowerCase()) ||
          customer.status.toLowerCase().includes(searcherString.toLowerCase()) ||
          customer.value.toString().includes(searcherString)
        );
      });
    }
  }

  openEditOrderDialog(rowData: Order) {
    this.ref = this.dialogService.open(AddEditOrderComponent,{
      header:"Edit Order",
      width:"70%",
      contentStyle:{"max-height": "700px", "overflow":"auto"},
      data:rowData
    })

    this.ref.onClose.subscribe((orderData: Order) => {
      console.log(orderData);
      if (orderData) {
        this.orders = this.orders.map(item => {
          if (item.id === orderData.id) {
            return orderData; // Update the item if IDs match
          } else {
            return item; // Return the original item if IDs don't match
          }
        });
      }
    });
  }

  openDeleteDialog(id:number) {
    this.ref = this.dialogService.open(DelOrderComponent,{
      header:'Delete Order',
      data:id
    })
    this.ref.onClose.subscribe((confirmed: boolean)=>{
      console.log(confirmed);
      if(confirmed){
        this.orders = this.orders.filter(order => order.id !== id);
      }
    })
  }
}
