import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './Car';

const CARSURL = 'api/cars'
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }

  getCars(){
    return this.http.get<Car[]>(CARSURL);
  }
}
