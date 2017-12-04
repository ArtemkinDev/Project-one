import {Car} from './car/Car';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';


@Injectable()
export class CarsService {

  public cars: Car[] = [];

  constructor(private http: Http) {
  }

  getCars() {
    return this.http.get('http://localhost:3000/cars')
      .map((response: Response) => {
        return response.json();
      });
  }

  newCarAdded(car: Car) {
    return this.http.post('http://localhost:3000/cars', car)
      .map((response: Response) => {
        return response.json();
      });
  }

  findCar(id: number) {
    return this.cars.findIndex(item => {
      return item.id === id;
    });
  }

  deleteCar(carId: number) {
    const index: number = this.findCar(carId);

    this.cars.splice(index, 1);
  }

}
