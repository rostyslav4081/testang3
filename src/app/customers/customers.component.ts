import { Component } from '@angular/core';
import {Customer} from "../models/customer";
import {CustomerService} from "../services/customer.service";


import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";

import {MessageService} from "primeng/api";

import {DelCustomerComponent} from "../del-customer/del-customer.component";
import {InMemoryDataService} from "../in-memory-data.service";
import {AddEditCustomerComponent} from "../add-edit-customer/add-edit-customer.component";



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  providers:[DialogService,MessageService]
})
export class CustomersComponent {

  customers: Customer[]=[];
  cols!: any[];

  ref: DynamicDialogRef | undefined;



  constructor(private customerService: CustomerService,private dialogService:DialogService,private inMemoryDataService:InMemoryDataService) {}

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
     this.ref = this.dialogService.open(AddEditCustomerComponent,{
      header:"New Customer",
      width: "70%",
      contentStyle:{"max-height": "600px", "overflow":"auto"}

    })

    this.ref.onClose.subscribe((customerData: Customer) => {
      if (customerData) {
        console.log(customerData);
        const customerId = this.inMemoryDataService.genIdCustomer(this.customers);
        this.customers.push({...customerData,id:customerId} );

      }

    });
  }


  openEditCustomerDialog( rowData:Customer) {
    this.ref = this.dialogService.open(AddEditCustomerComponent,{
      header:"Edit Customer",
      width:"70%",
      contentStyle:{"max-height": "600px", "overflow":"auto"},
      data:rowData
    })

    this.ref.onClose.subscribe((customerData: Customer) => {
      console.log(customerData);
      if (customerData) {
        this.customers = this.customers.map(item => {
          if (item.id === customerData.id) {
            return customerData; // Update the item if IDs match
          } else {
            return item; // Return the original item if IDs don't match
          }
        });
      }
    });
  }

  openDeleteDialog(id:number) {
      this.ref = this.dialogService.open(DelCustomerComponent,{
        header:'Delete Customer',
        data:id
      })
      this.ref.onClose.subscribe((confirmed: boolean)=>{
        console.log(confirmed);
        if(confirmed){
          this.customers = this.customers.filter(customer => customer.id !== id);
        }
      })
  }

  applyFilter(searcherString: string) {
    if(searcherString ===''){
      this.ngOnInit();
    }else {
      this.customers = this.customers.filter((customer) => {
        return (
          customer.firstName.toLowerCase().includes(searcherString.toLowerCase()) ||
          customer.lastName.toLowerCase().includes(searcherString.toLowerCase()) ||
          customer.email.toLowerCase().includes(searcherString.toLowerCase()) ||
          customer.phone.toString().includes(searcherString)
        );
      });
    }
  }


}
