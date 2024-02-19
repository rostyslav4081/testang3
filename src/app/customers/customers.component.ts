import { Component } from '@angular/core';
import {Customer } from "../models/customer";
import {CustomerService} from "../services/customer.service";
import { ButtonModule } from 'primeng/button';

import {DialogService} from "primeng/dynamicdialog";
import {AddCustomerComponent} from "../addcustomer/addcustomer.component";



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  providers:[DialogService]
})
export class CustomersComponent {

  customers: Customer[]=[];
  cols!: any[];




  constructor(private customerService: CustomerService,private dialogService:DialogService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((res: Customer[]) => {
      this.customers = res;
      this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'firstName', header: 'First Name' },
        { field: 'lastName', header: 'Last Name' },
        { field: 'email', header: 'Email' },
        { field: 'phone', header: 'Phone' }
      ];
    });
  }



  openCustomerDialog() {
    const ref = this.dialogService.open(AddCustomerComponent,{
      header:"New Customer",
      width: "70%",
      contentStyle:{"max-height": "600px", "overflow":"auto"}
    })

    ref.onClose.subscribe((customerData: Customer) => {
      if (customerData) {
        this.customers.push(customerData)
      }

    });
  }
}
