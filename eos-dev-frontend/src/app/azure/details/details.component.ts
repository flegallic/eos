import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/service/cloud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class AzDetailsComponent implements OnInit {
  currentCustomer = null;
  message = '';

  constructor(
    private cloudService: CloudService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.get_azCustomers(this.route.snapshot.paramMap.get('id'));
  }

  get_azCustomers(id): void {
    this.cloudService.get_azCustomers(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  update_azCustomers(): void {
    this.cloudService.update_azCustomers(this.currentCustomer.id, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The customer was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
