import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/responses/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44388/api/brands/getall"
  constructor(private httpClient:HttpClient) { }

getBrandsList():Observable<ListResponseModel<Brand>>{
  return  this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
}


