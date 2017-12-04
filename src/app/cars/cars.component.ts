import {Component, OnInit} from '@angular/core';
import {Car} from '../car/Car';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  public searchObject: object;
  public cars: Car[] = [];

  searchCarObject(obj: object) {
    this.searchObject = obj;
  }

  removeCarFromCars(carId: number) {
    this.service.deleteCar(carId);
  };

  constructor(private service: CarsService) {
  }

  ngOnInit() {
    this.service
      .getCars()
      .subscribe((cars: Car[]) => {
        this.cars = cars;
      });
    /*this.cars = this.service.cars;*/
  }

}
