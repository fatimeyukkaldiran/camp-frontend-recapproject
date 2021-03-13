import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import {HttpClient} from '@angular/common/http'
import { BrandResponseModel } from 'src/app/models/responses/brandResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  brands :Brand[] = []
  apiUrl = "https://localhost:44388/api/brands/getall"
   

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getBrandsList()
  }

  getBrandsList(){
    this.httpClient
    .get<BrandResponseModel>(this.apiUrl)
      .subscribe((response)=>{
        this.brands = response.data
      })
  }


}
