import {Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Customer} from "../models/customer";
import {CustomerService} from "../services/customer.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";



@Component({
  selector: 'app-addCustomer',
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddCustomerComponent {
  customerForm!: FormGroup;



  constructor(private fb: FormBuilder,private customerService:CustomerService,public ref:DynamicDialogRef) {
    this.customerForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['', Validators.required],
      phone:['',Validators.required,],

    },);

  }








  saveCustomer() {
    if(this.customerForm.valid){
      const customerData:Customer = this.customerForm.value;
      this.customerService.addCustomer(customerData).subscribe(
        response =>{
          console.log("Customer saved successfully!",response);

            this.ref.close(customerData);

        },
        error => {
          console.error("Error saving DataCustomer",error);
        }
      );

    }
  }

}
