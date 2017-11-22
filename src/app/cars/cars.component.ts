import { Component } from '@angular/core';
import { Car } from '../car/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  public searchCar = '';

  public cars: Car[] = [
    {
      id: Date.now() + 28,
      name: 'Ford',
      year: 2012,
      price: 12000,
      availability: true
    },
    {
      id: Date.now() + 15,
      name: 'BMW',
      year: 2010,
      price: 24000,
      availability: true
    },
    {
      id: Date.now() + 8,
      name: 'Gili',
      year: 2008,
      price: 6000,
      availability: false
    },
    {
      id: Date.now() + 2,
      name: 'Mercedes',
      year: 1998,
      price: 5400,
      availability: true
    }
  ];

  addCar(car: Car) {
    this.cars.push(car);
  };

  findCar(id: number) {
    return this.cars.findIndex(item => {
      return item.id === id;
    });
  }

  removeCarFromCars(carId: number) {
    const index: number = this.findCar(carId);

    this.cars.splice(index, 1);
  }

  constructor() {
  }

}
