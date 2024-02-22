import { Component } from '@angular/core';

import {CustomerService} from "../services/customer.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Customer} from "../models/customer";
import {OrderService} from "../services/order.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-del-customer',
  templateUrl: './del-customer.component.html',
  styleUrl: './del-customer.component.css'
})
export class DelCustomerComponent {
  id: number;

  constructor(
    private customerService: CustomerService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private orderService:OrderService,
    private messageService: MessageService
  ) {
    this.id = this.config.data;
    console.log(this.id);
  }

  deleteCustomer() {
    if (this.id) {
      this.customerService.deleteCustomer(this.id).subscribe(
        response => {
          console.log("Customer deleted successfully!", response);
          this.orderService.deleteOrderByCustemerId(this.id).subscribe(
            () => {
              console.log('Orders deleted successfully.');
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Customer and orders deleted successfully!' });
            },
            error => {
              console.error('Error deleting orders:', error);
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting orders' });
            }
          );
          this.ref.close(true);
        },
        error => {
          console.error("Error deleting customer", error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting customer' });
          this.ref.close(false);
        }
      );
    }
  }
  close() {
    this.ref.close();
  }
}






