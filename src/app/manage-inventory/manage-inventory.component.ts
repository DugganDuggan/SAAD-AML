import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-inventory',
  standalone: true,
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.css']
})
export class ManageInventoryComponent {
  // Example data
  newOrders = 57;
  previousOrders = 26;
  overdueReturns = 5;
  lowStock = 3;

  ordersData = [
    { month: 'Jan', newOrders: 10, overdueReturns: 1 },
    { month: 'Feb', newOrders: 15, overdueReturns: 3 },
    { month: 'Mar', newOrders: 12, overdueReturns: 2 },
    // More data here...
  ];
}