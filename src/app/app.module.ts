import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InMemoryDataService} from "./in-memory-data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { CustomersComponent } from './customers/customers.component';

import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";

import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {AddCustomerComponent} from "./addCustomer/addcustomer.component";
import {DialogModule} from "primeng/dialog";
import {AnimateModule} from "primeng/animate";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EditCustomerComponent } from './editcustomer/editcustomer.component';
import { DelCustomerComponent } from './del-customer/del-customer.component';
import {MenubarModule} from "primeng/menubar";
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    MessagesComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    DelCustomerComponent,
    AddEditCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    TableModule,
    PaginatorModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DialogModule,
    AnimateModule,
    BrowserAnimationsModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
