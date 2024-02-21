import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testang3';
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      { label: 'Customers', routerLink: '/customers' },
      { label: 'Orders', routerLink: '/orders' }
      // Add more items as needed
    ];
  }
}
