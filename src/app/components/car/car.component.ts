import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  car1: any = { carId: 1, brandId: 1, colorId: 1, carName: 'Jaguar I-Pace', dailyPrice: 300, modelYear: 2010, description: 'Yolcu Airbag,3 Yetişkin,ABS' }
  car2: any = { carId: 2, brandId: 2, colorId: 2, carName: 'Bmw 3.18i', dailyPrice: 500, modelYear: 2011, description: 'Yolcu Airbag,3 Yetişkin,ABS' }
  car3: any = { carId: 3, brandId: 3, colorId: 3, carName: 'Ford Focus 1.5', dailyPrice: 200, modelYear: 2012, description: 'Yolcu Airbag,3 Yetişkin,ABS' }
  car4: any = { carId: 4, brandId: 4, colorId: 4, carName: 'Volvo XC60d', dailyPrice: 150, modelYear: 2019, description: 'Yolcu Airbag,3 Yetişkin,ABS' }
  car5: any = { carId: 5, brandId: 5, colorId: 5, carName: 'Honda Civic', dailyPrice: 350, modelYear: 2020, description: 'Yolcu Airbag,3 Yetişkin,ABS' }

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5]
  constructor() { }

  ngOnInit(): void {
  }

}
