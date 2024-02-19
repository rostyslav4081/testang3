import { Component } from '@angular/core';
import {Customer} from "../models/customer";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrl: './editcustomer.component.css'
})
export class EditCustomerComponent {
    formData:Customer;
    constructor(public ref:DynamicDialogRef,public config:DynamicDialogConfig) {
      this.formData = {...this.config.data}
    }
}
