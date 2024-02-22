import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {OrderService} from "../services/order.service";
import {StatusOrder} from "../models/status-order";

import {Order} from "../models/order";

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrl: './add-edit-order.component.css'
})
export class AddEditOrderComponent {
  orderForm!: FormGroup;
  statuses!: any[] ;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {

    if(this.config.data === undefined){
      this.orderForm = this.fb.group({
        id: undefined,
        numberOrder: [ '', Validators.required],
        dateOrder: ['', Validators.required],
        value: ['', Validators.required],
        status: ['', Validators.required],
      });
    }else {
      this.orderForm = this.fb.group({
        id: [this.config.data.id , Validators.required],
        numberOrder: [this.config.data.numberOrder , Validators.required],
        dateOrder: [this.config.data.dateOrder, Validators.required],
        value: [this.config.data.value , Validators.required],
        status: [this.config.data.status , Validators.required],
      });
    }
  }
  ngOnInit(): void {
    // Initialize the form and other setup
    this.statuses = this.getDropdownOptions(StatusOrder); // Populate statuses array
  }
  getDropdownOptions(enumObject: any): any[] {
    return Object.keys(enumObject).map(key => ({ label: enumObject[key], value: key }));
  }
  saveOrder() {
    if (this.orderForm.valid) {
      const orderData: Order = this.orderForm.value;
      // Check if customerData.id exists to determine if it's a new or existing customer
      if (!orderData.id) {
        // Add new customer
        this.orderService.addOrder(orderData).subscribe(
          response => {
            console.log("Order saved successfully!", response);
            this.ref.close(orderData);
          },
          error => {
            console.error("Error saving order data", error);
          }
        );
      } else {
        // Update existing customer
        this.orderService.updateOrder(orderData).subscribe(
          response => {
            console.log("Order updated successfully!", response);
            this.ref.close(orderData);
          },
          error => {
            console.error("Error updating order data", error);
          }
        );
      }
    } else {
      console.error("Form is invalid");
    }
  }

}
