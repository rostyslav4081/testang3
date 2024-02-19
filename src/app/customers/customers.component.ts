import { Component } from '@angular/core';
import {Customer } from "../models/customer";
import {CustomerService} from "../services/customer.service";
import { ButtonModule } from 'primeng/button';

import {DialogService} from "primeng/dynamicdialog";
import {AddCustomerComponent} from "../addCustomer/addcustomer.component";
import {MessageService} from "primeng/api";
import {EditCustomerComponent} from "../editcustomer/editcustomer.component";



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  providers:[DialogService,MessageService]
})
export class CustomersComponent {

  customers: Customer[]=[];
  cols!: any[];




  constructor(private customerService: CustomerService,private dialogService:DialogService,private messageService: MessageService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((res: Customer[]) => {
      this.customers = res;
      this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'firstName', header: 'First Name' },
        { field: 'lastName', header: 'Last Name' },
        { field: 'email', header: 'Email' },
        { field: 'phone', header: 'Phone' },
        { field: 'options', header: 'Options'}
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


  openEditCustomerDialog( rowData:Customer) {
    const ref = this.dialogService.open(AddCustomerComponent,{
      header:"Edit Customer",
      width:"70%",
      contentStyle:{"max-height": "600px", "overflow":"auto"},
      data:rowData
    })
    console.log(rowData);
  }
}
