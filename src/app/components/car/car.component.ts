import { CarResponseModel } from './../../models/responses/carResponseModel';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

//HttpClient --> to connect API on backend
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  cars:Car[] = []
  apiUrl = "https://localhost:44388/api/cars/getall"
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getCarsList()
  }
    getCarsList(){
      this.httpClient
      .get<CarResponseModel>(this.apiUrl)
      .subscribe((response)=>{
        this.cars = response.data
      })
    }
  


}
