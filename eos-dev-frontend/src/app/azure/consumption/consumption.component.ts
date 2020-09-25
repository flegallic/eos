import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/service/cloud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class AzConsumptionComponent implements OnInit {
  currentReference = null;
  totalRec : number;
  page: number = 1;

  constructor(
    private cloudService: CloudService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.get_azBilling(this.route.snapshot.paramMap.get('reference'));
  }

  get_azBilling(reference): void {

    this.cloudService.get_azBilling(reference)
      .subscribe(
        data => {
          this.currentReference = data;
          this.totalRec = this.currentReference.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
