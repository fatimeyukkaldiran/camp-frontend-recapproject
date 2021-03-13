import { RentalResponseModel } from './../../models/responses/rentalResponseModel';
import { HttpClient } from '@angular/common/http';
import { Rental } from './../../models/rental';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals : Rental[] = []
  apiUrl = "https://localhost:44388/api/rentals/getall"
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getRentalList();
  }

  getRentalList(){
    this.httpClient
    .get<RentalResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.rentals=response.data
    })
  }

}
