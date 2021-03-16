import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';

//HttpClient --> to connect API on backend
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  cars:Car[] = []
  dataLoaded = false;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsList()
  }
    getCarsList(){
    this.carService.getCarsList().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
    }
}
