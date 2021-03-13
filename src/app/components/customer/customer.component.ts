import { CustomerResponseModel } from './../../models/responses/customerResponseModel';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers : Customer[] = []
  apiUrl="https://localhost:44388/api/customers/getall"
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getCustomersList();
  }
  getCustomersList(){
    this.httpClient
    .get<CustomerResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.customers=response.data
    })
  }

}
