import { Component } from '@angular/core';

import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {OrderService} from "../services/order.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-del-order',
  templateUrl: './del-order.component.html',
  styleUrl: './del-order.component.css'
})
export class DelOrderComponent {
  id: number;

  constructor(
    private orderService: OrderService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {
    this.id = this.config.data;
    console.log(this.id);
  }

  deleteOrder() {
    if (this.id) {
      this.orderService.deleteOrder(this.id).subscribe(
        response => {
          console.log("Order deleted successfully!", response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order deleted successfully!' });
          this.ref.close(true);
        },
        error => {
          console.error("Error deleting order", error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting order' });
          this.ref.close(false);
        }
      );
    }
  }

  close() {
    // Close the dialog without any specific result
    this.ref.close();
  }
}
