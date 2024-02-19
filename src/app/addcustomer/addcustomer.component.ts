import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {Customer} from "../models/customer";
import {CustomerService} from "../services/customer.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";



@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddCustomerComponent {
  customerForm!: FormGroup;



  constructor(private fb: FormBuilder,private customerService:CustomerService,private ref:DynamicDialogRef) {

  }

  ngOnInit():void{
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
