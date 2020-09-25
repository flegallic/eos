import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AzCustomersComponent } from './azure/customers/customers.component';
import { AzBillingComponent } from './azure/invoices/invoices.component';
import { AzDetailsComponent } from './azure/details/details.component';
import { AzConsumptionComponent } from './azure/consumption/consumption.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AzCustomersComponent,
    AzBillingComponent,
    AzDetailsComponent,
    AzConsumptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
