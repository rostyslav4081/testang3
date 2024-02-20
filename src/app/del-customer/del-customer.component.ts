import { Component } from '@angular/core';

import {CustomerService} from "../services/customer.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Customer} from "../models/customer";

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
    public config: DynamicDialogConfig
  ) {
    // Assign the id from the config data to the component property
    this.id = this.config.data;
    console.log(this.id);
  }

  deleteCustomer() {
    if (this.id) {
      this.customerService.deleteCustomer(this.id).subscribe(
        response => {
          console.log("Customer deleted successfully!", response);
          // Pass true to indicate successful deletion
          this.ref.close(true);
        },
        error => {
          console.error("Error deleting customer", error);
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





