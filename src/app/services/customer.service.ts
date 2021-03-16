import { Customer } from './../models/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responses/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44388/api/customers/getall"
  constructor(private httpClient:HttpClient) { }
  
getCustomersList():Observable<ListResponseModel<Customer>>{
  return  this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl)
}
}
