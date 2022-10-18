import { Injectable } from '@angular/core';
import { Car } from './Car';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const cars:Car[] = [
      { image: '../assets/images/alpine.jpg', model: 'model 1', description:'tremendo auto muy barato', type:'suv' },
      { image: '../assets/images/audi.jpg', model: 'model 1', description:'tremendo audi flow ejecutivo', type:'deportivo' },
      { image: '../assets/images/bmw.jpg', model: 'model 1', description:'tremendo bmw con 800hp', type:'suv' },
      { image: '../assets/images/dacia.jpeg', model: 'model 1', description:'no muy tremendo', type:'suv' },
      { image: '../assets/images/fiat 850.jpeg', model: 'model 1', description:'tremendo con 800hp', type:'suv' },
      { image: '../assets/images/indio.jpeg', model: 'model 1', description:'tremendo con 800hp', type:'suv' },
      { image: '../assets/images/mehari.jpeg', model: 'model 1', description:'tremendo con 800hp', type:'suv' },
      { image: '../assets/images/mercedes.jpg', model: 'model 1', description:'tremendo con 800hp', type:'suv' },
      { image: '../assets/images/rover.jpg', model: 'model 1', description:'tremendo con 800hp', type:'suv' },
      { image: '../assets/images/trabant.jpeg', model: 'model 1', description:'tremendo algo mejor que el anterior', type:'suv' },
      { image: '../assets/images/vw combi.jpeg', model: 'model 1', description:'tremendo increible', type:'suv' }
    ];
    return {cars};
  }
}
