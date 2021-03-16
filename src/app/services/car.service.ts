import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/responses/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44388/api/cars/getall"
  constructor(private httpClient:HttpClient) { }

  getCarsList():Observable<ListResponseModel<Car>>{
  return  this.httpClient.get<ListResponseModel<Car>>(this.apiUrl)
  }
}
