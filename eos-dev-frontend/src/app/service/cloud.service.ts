import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../common/GlobalVariable';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) { }

  getAll_azCustomers(): Observable<any> {
    return this.http.get(GlobalVariable.baseUrl + '/azure/customers');
  }
  get_azCustomers(id): Observable<any> {
    return this.http.get(`${GlobalVariable.baseUrl}/azure/customers/${id}`);
  }
  update_azCustomers(id, data): Observable<any> {
    return this.http.put(`${GlobalVariable.baseUrl}/azure/customers/${id}`, data);
  }
  findByTitle_azCustomers(companyName): Observable<any> {
    return this.http.get(`${GlobalVariable.baseUrl}/azure/customers?companyName=${companyName}`);
  }
  getAll_azBilling(): Observable<any> {
    return this.http.get(GlobalVariable.baseUrl + '/azure/billing');
  }
  get_azBilling(reference): Observable<any> {
    return this.http.get(`${GlobalVariable.baseUrl}/azure/billing/${reference}`);
  }
  findByTitle_azBilling(companyName): Observable<any> {
    return this.http.get(`${GlobalVariable.baseUrl}/azure/billing?companyName=${companyName}`);
  }
}
