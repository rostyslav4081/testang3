import { Component } from '@angular/core';
import {Customer } from "../models/customer";
import {CustomerService} from "../services/customer.service";
import { ButtonModule } from 'primeng/button';
import {FormBuilder} from "@angular/forms";



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  customers: Customer[]=[];
  cols!: any[];




  constructor(private customerService: CustomerService,private fb: FormBuilder) {}

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

  onSubmit() {

  }

  Close() {

  }
}
