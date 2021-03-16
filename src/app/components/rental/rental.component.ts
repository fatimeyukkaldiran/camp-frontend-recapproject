import { Rental } from './../../models/rental';
import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals : Rental[] = []
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalList();
  }

  getRentalList(){
    this.rentalService.getRentalsList().subscribe(response=>{
      this.rentals=response.data
    })
  }

}
