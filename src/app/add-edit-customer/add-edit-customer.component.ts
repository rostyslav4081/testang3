import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Customer} from "../models/customer";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css'],

})
export class AddEditCustomerComponent {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {
    if (this.config.data === undefined) {
      this.customerForm = this.fb.group({
        id: undefined,
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
      });
    } else {
      this.customerForm = this.fb.group({
        id: [this.config.data.id, Validators.required],
        firstName: [this.config.data.firstName, Validators.required],
        lastName: [this.config.data.lastName, Validators.required],
        email: [this.config.data.email, Validators.required],
        phone: [this.config.data.phone, Validators.required],
      });
    }


  }

  saveCustomer() {
    if (this.customerForm.valid) {
      const customerData: Customer = this.customerForm.value;
      if (!customerData.id) {

        this.customerService.addCustomer(customerData).subscribe(
          response => {
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Customer saved successfully!'});
            this.ref.close(customerData);
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Error saving customer data'});
            console.error("Error saving customer data", error);
          }
        );
      } else {
        this.customerService.updateCustomer(customerData).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Customer updated successfully!'
            });
            this.ref.close(customerData);
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Error updating customer data'});
            console.error("Error updating customer data", error);
          }
        );
      }
    } else {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Form is invalid'});
      console.error("Form is invalid");
    }
  }


}
