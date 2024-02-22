import { Component } from '@angular/core';

import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {OrderService} from "../services/order.service";

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
    public config: DynamicDialogConfig
  ) {
    // Assign the id from the config data to the component property
    this.id = this.config.data;
    console.log(this.id);
  }

  deleteOrder() {
    if (this.id) {
      this.orderService.deleteOrder(this.id).subscribe(
        response => {
          console.log("Order deleted successfully!", response);
          // Pass true to indicate successful deletion
          this.ref.close(true);
        },
        error => {
          console.error("Error deleting order", error);
          // Pass false to indicate failure
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
