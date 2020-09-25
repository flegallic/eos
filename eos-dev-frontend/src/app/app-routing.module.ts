import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AzCustomersComponent } from './azure/customers/customers.component';
import { AzBillingComponent } from './azure/invoices/invoices.component';
import { AzDetailsComponent } from './azure/details/details.component';
import { AzConsumptionComponent } from './azure/consumption/consumption.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'azure/customers', component: AzCustomersComponent },
  { path: 'azure/customers/:id', component: AzDetailsComponent },
  { path: 'azure/billing', component: AzBillingComponent },
  { path: 'azure/billing/:reference', component: AzConsumptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
