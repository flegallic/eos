import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/service/cloud.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class AzCustomersComponent implements OnInit {
  customers: any;
  currentCustomer = null;
  currentIndex = -1;
  companyName: '';
  totalRec : number;
  page: number = 1;

  constructor(private AzureService: CloudService){ }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.AzureService.getAll_azCustomers()
      .subscribe(
        data => {
          this.customers = data;
          this.totalRec = this.customers.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshListCustomers(): void {
    this.retrieveCustomers();
    this.currentCustomer = null;
    this.currentIndex = -1;
  }

  setActiveCustomers(customer, index): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }
  searchCompanyNameCustomers(): void {
    this.AzureService.findByTitle_azCustomers(this.companyName)
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

