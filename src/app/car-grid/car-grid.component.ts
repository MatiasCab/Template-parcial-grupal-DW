import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-grid',
  templateUrl: './car-grid.component.html',
  styleUrls: ['./car-grid.component.scss']
})
export class CarGridComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carsService:CarsService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carsService.getCars()
      .subscribe(cars => this.cars = cars);
  }

}
