import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {Customer} from "../models/customer";
import {CustomerService} from "../services/customer.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";



@Component({
  selector: 'app-addCustomer',
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddCustomerComponent {
  customerForm!: FormGroup;
  @Input() formData:any;


  constructor(private fb: FormBuilder,private customerService:CustomerService,public ref:DynamicDialogRef,public config:DynamicDialogConfig) {
    this.customerForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['', Validators.required],
      phone:['',Validators.required,],

    },);

  }

  ngOnInit():void{
   if (this.formData){
     this.customerForm.patchValue(this.formData);
   }


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
