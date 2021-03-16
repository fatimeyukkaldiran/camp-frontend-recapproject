import { Rental } from './../models/rental';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responses/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44388/api/rentals/getall"
  constructor(private httpClient:HttpClient) { }

getRentalsList():Observable<ListResponseModel<Rental>>{
  return  this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }}
