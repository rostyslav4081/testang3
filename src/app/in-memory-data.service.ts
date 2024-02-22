import { Injectable } from '@angular/core';
import {StatusOrder} from "./models/status-order";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Customer} from "./models/customer";
import {Order} from "./models/order";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers: Customer[] = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "123456789"
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@example.com",
        phone: "987654321"
      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        phone: "456789012"
      },
      {
        id: 4,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        phone: "789012345"
      },
      {
        id: 5,
        firstName: "Emily",
        lastName: "Brown",
        email: "emily@example.com",
        phone: "210987654"
      },
      {
        id: 6,
        firstName: "Michael",
        lastName: "Wilson",
        email: "michael@example.com",
        phone: "543210987"
      },
      {
        id: 7,
        firstName: "Sophia",
        lastName: "Martinez",
        email: "sophia@example.com",
        phone: "876543210"
      },
      {
        id: 8,
        firstName: "William",
        lastName: "Taylor",
        email: "william@example.com",
        phone: "109876543"
      },
      {
        id: 9,
        firstName: "Olivia",
        lastName: "Garcia",
        email: "olivia@example.com",
        phone: "432109876"
      },
      {
        id: 10,
        firstName: "James",
        lastName: "Rodriguez",
        email: "james@example.com",
        phone: "765432109"
      },
      {
        id: 11,
        firstName: "Emma",
        lastName: "Lopez",
        email: "emma@example.com",
        phone: "98765432"
      },
      {
        id: 12,
        firstName: "Alexander",
        lastName: "Hernandez",
        email: "alexander@example.com",
        phone: "321098765"
      },
      {
        id: 13,
        firstName: "Charlotte",
        lastName: "Gonzalez",
        email: "charlotte@example.com",
        phone: "654321098"
      },
      {
        id: 14,
        firstName: "Daniel",
        lastName: "Perez",
        email: "daniel@example.com",
        phone: "987654321"
      },
      {
        id: 15,
        firstName: "Ava",
        lastName: "Sanchez",
        email: "ava@example.com",
        phone: "210987654"
      },
      {
        id: 16,
        firstName: "Matthew",
        lastName: "Ramirez",
        email: "matthew@example.com",
        phone: "543210987"
      },
      {
        id: 17,
        firstName: "Mia",
        lastName: "Flores",
        email: "mia@example.com",
        phone: "876543210"
      },
      {
        id: 18,
        firstName: "David",
        lastName: "Mitchell",
        email: "david@example.com",
        phone: "109876543"
      },
      {
        id: 19,
        firstName: "Ethan",
        lastName: "Robinson",
        email: "ethan@example.com",
        phone: "432109876"
      },
      {
        id: 20,
        firstName: "Isabella",
        lastName: "Turner",
        email: "isabella@example.com",
        phone: "765432109"
      }
    ];
    const orders: Order[] = [

      {
        id: 1,
        numberOrder: "ABC123",
        dateOrder: "02/05/2024",
        value: 100,
        status: StatusOrder.New,
        idCustomer: 1
      },
      {
        id: 2,
        numberOrder: "DEF456",
        dateOrder: "01/05/2024",
        value: 150,
        status: StatusOrder.Accepted,
        idCustomer: 2
      },
      {
        id: 3,
        numberOrder: "GHI789",
        dateOrder: "02/06/2023",
        value: 200,
        status: StatusOrder.Completed,
        idCustomer: 3
      },
      {
        id: 4,
        numberOrder: "JKL012",
        dateOrder: "02/06/2023",
        value: 120,
        status: StatusOrder.New,
        idCustomer: 4
      },
      {
        id: 5,
        numberOrder: "MNO345",
        dateOrder: "02/06/2022",
        value: 90,
        status: StatusOrder.Accepted,
        idCustomer: 5
      },
      {
        id: 6,
        numberOrder: "PQR678",
        dateOrder: "02/07/2023",
        value: 180,
        status: StatusOrder.Completed,
        idCustomer: 6
      },
      {
        id: 7,
        numberOrder: "STU901",
        dateOrder: "01/07/2023",
        value: 210,
        status: StatusOrder.New,
        idCustomer: 7
      },
      {
        id: 8,
        numberOrder: "VWX234",
        dateOrder: "02/08/2023",
        value: 130,
        status: StatusOrder.Accepted,
        idCustomer: 8
      },
      {
        id: 9,
        numberOrder: "YZA567",
        dateOrder: "02/08/2023",
        value: 240,
        status: StatusOrder.Completed,
        idCustomer: 9
      },
      {
        id: 10,
        numberOrder: "BCD890",
        dateOrder: "02/05/2024",
        value: 110,
        status: StatusOrder.New,
        idCustomer: 10
      },
      {
        id: 11,
        numberOrder: "EFG123",
        dateOrder: "02/06/2022",
        value: 160,
        status: StatusOrder.Accepted,
        idCustomer: 11
      },
      {
        id: 12,
        numberOrder: "HIJ456",
        dateOrder: "02/05/2022",
        value: 190,
        status: StatusOrder.Completed,
        idCustomer: 12
      },
      {
        id: 13,
        numberOrder: "KLM789",
        dateOrder: "02/05/2024",
        value: 220,
        status: StatusOrder.New,
        idCustomer: 13
      },
      {
        id: 14,
        numberOrder: "NOP012",
        dateOrder: "02/05/2022",
        value: 140,
        status: StatusOrder.Accepted,
        idCustomer: 14
      },
      {
        id: 15,
        numberOrder: "QRS345",
        dateOrder: "02/07/2022",
        value: 250,
        status: StatusOrder.Completed,
        idCustomer: 15
      },
      {
        id: 16,
        numberOrder: "TUV678",
        dateOrder: "02/05/2024",
        value: 120,
        status: StatusOrder.New,
        idCustomer: 16
      },
      {
        id: 17,
        numberOrder: "WXYZ901",
        dateOrder: "02/05/2024",
        value: 130,
        status: StatusOrder.Accepted,
        idCustomer: 17
      },
      {
        id: 18,
        numberOrder: "ABC234",
        dateOrder: "02/05/2024",
        value: 180,
        status: StatusOrder.Completed,
        idCustomer: 18
      },
      {
        id: 19,
        numberOrder: "DEF567",
        dateOrder: "02/05/2024",
        value: 260,
        status: StatusOrder.New,
        idCustomer: 19
      },
      {
        id: 20,
        numberOrder: "GHI890",
        dateOrder: "02/05/2024",
        value: 150,
        status: StatusOrder.Accepted,
        idCustomer: 20
      }
    ];

    return {customers,orders};

  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genIdCustomer(customers: Customer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(customer => customer.id)) + 1 : 11;
  }
  genIdOrder(Orders: Order[]): number {
    return Orders.length > 0 ? Math.max(...Orders.map(order => order.id)) + 1 : 11;
  }
}
