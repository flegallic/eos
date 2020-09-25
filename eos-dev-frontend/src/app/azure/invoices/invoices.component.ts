import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/service/cloud.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class AzBillingComponent implements OnInit {
  invoices: any;
  currentBilling = null;
  currentIndex = -1;
  companyName: '';
  totalRec : number;
  page: number = 1;

  constructor(private AzureService: CloudService){ }

  ngOnInit(): void {
    this.retrieveBilling();
  }

  retrieveBilling(): void {
    this.AzureService.getAll_azBilling()
      .subscribe(
        data => {
          this.invoices = data;
          this.totalRec = this.invoices.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshListBilling(): void {
    this.retrieveBilling();
    this.currentBilling = null;
    this.currentIndex = -1;
  }

  setActiveBilling(invoice, index): void {
    this.currentBilling = invoice;
    this.currentIndex = index;
  }
  searchCompanyNameBilling(): void {
    this.AzureService.findByTitle_azBilling(this.companyName)
      .subscribe(
        data => {
          this.invoices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
