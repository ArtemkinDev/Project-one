import {Component} from '@angular/core';
import {Car} from '../car/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  public cars: Car[] = [
    {
      id: Date.now() + 1,
      name: 'Ford',
      year: 2012,
      price: 12000,
      availability: true
    },
    {
      id: Date.now() + 5,
      name: 'BMW',
      year: 2010,
      price: 24000,
      availability: true
    },
    {
      id: Date.now() + 28,
      name: 'Gili',
      year: 2008,
      price: 6000,
      availability: false
    },
    {
      id: Date.now() + 10,
      name: 'Mercedes',
      year: 1998,
      price: 5400,
      availability: true
    }
  ];

  addCar(car: Car) {
    this.cars.push(car);
  };

  findCar(car: string) {
    return this.cars.findIndex(item => {
      return item.name === car;
    });
  }

  removeCarFromCars(carName: string) {
    const index: number = this.findCar(carName);

    this.cars.splice(index, 1);
  }

  constructor() {
  }

}
