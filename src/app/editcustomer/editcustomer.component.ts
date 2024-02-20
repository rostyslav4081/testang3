import {Component, Input} from '@angular/core';

import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

import {Customer} from "../models/customer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrl: './editcustomer.component.css'
})
export class EditCustomerComponent {


  editForm!:FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.editForm = this.fb.group({
      id: [this.config.data.id, Validators.required],
      firstName: [this.config.data.firstName, Validators.required],
      lastName: [this.config.data.lastName, Validators.required],
      email: [this.config.data.email, Validators.required],
      phone: [this.config.data.phone, Validators.required],
    });
  }

  editCustomer() {
    if(this.editForm.valid){
      const customerData:Customer = this.editForm.value;
      console.log(customerData);
      this.customerService.updateCustomer(customerData).subscribe(
        response =>{
          console.log("Customer updated successfully!",response);

          this.ref.close(customerData);

        },
        error => {
          console.error("Error updating DataCustomer",error);
        }
      );
    }
  }
}


