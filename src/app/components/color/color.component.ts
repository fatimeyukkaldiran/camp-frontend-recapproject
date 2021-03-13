import { ColorResponseModel } from './../../models/responses/colorResponseModel';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors : Color[] = []
  apiUrl = "https://localhost:44388/api/colors/getall"
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getColorsList()
  }

  getColorsList(){
    this.httpClient
    .get<ColorResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.colors=response.data
    })
  }

}
