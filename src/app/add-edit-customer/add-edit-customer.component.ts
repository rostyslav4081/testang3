import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomerService } from "../services/customer.service";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Customer } from "../models/customer";

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css'] // Use styleUrls instead of styleUrl
})
export class AddEditCustomerComponent {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    // Initialize the form with default values or values from config
    this.customerForm = this.fb.group({
      id: [(this.config.data?.id || '') , Validators.required],
      firstName: [(this.config.data?.firstName || '') , Validators.required],
      lastName: [(this.config.data?.lastName || '') , Validators.required],
      email: [( this.config.data?.email || '') , Validators.required],
      phone: [(this.config.data?.phone || '') , Validators.required]
    });
  }

  saveCustomer() {
    if (this.customerForm.valid) {
      const customerData: Customer = this.customerForm.value;
      if (!customerData.id) {
        // Add new customer
        this.customerService.addCustomer(customerData).subscribe(
          response => {
            console.log("Customer saved successfully!", response);
            this.ref.close(customerData);
          },
          error => {
            console.error("Error saving customer data", error);
          }
        );
      } else {
        // Update existing customer
        this.customerService.updateCustomer(customerData).subscribe(
          response => {
            console.log("Customer updated successfully!", response);
            this.ref.close(customerData);
          },
          error => {
            console.error("Error updating customer data", error);
          }
        );
      }
    } else {
      console.error("Form is invalid");
    }
  }
}
