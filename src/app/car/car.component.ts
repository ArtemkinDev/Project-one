import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from './Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input('carItem') car: Car;
  @Output('deleteCar') deletedCar = new EventEmitter<string>();

  deleteCar(car: string) {
    this.deletedCar.emit(car);
  }
}
