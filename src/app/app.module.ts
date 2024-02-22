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

import {DialogModule} from "primeng/dialog";
import {AnimateModule} from "primeng/animate";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { DelCustomerComponent } from './del-customer/del-customer.component';
import {MenubarModule} from "primeng/menubar";
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { DelOrderComponent } from './del-order/del-order.component';
import { AddEditOrderComponent } from './add-edit-order/add-edit-order.component';
import {CalendarModule} from "primeng/calendar";
import {ToastModule} from "primeng/toast";
import {MessageModule} from "primeng/message";
import {MessageService} from "primeng/api";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    MessagesComponent,
    DelCustomerComponent,
    AddEditCustomerComponent,
    DelOrderComponent,
    AddEditOrderComponent,
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
    CalendarModule,
    ToastModule,
    MessageModule,
    RippleModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
