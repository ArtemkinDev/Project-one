import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from '../car/Car';

@Component({
  selector: 'app-car-tab',
  templateUrl: './car-tab.component.html',
  styleUrls: ['./car-tab.component.scss']
})
export class CarTabComponent implements OnInit {
  @Output('carAdded') carAdded = new EventEmitter<Car>();
  @Output('searchCarResultObject') searchCarResultObject = new EventEmitter<object>();
  public search = false;
  public added = false;
  public currentTab = 0;

  constructor() {
  }

  ngOnInit() {
  }

  addCar(car: Car) {
    this.carAdded.emit(car);
  }

  searchCarObject(obj: object) {
    this.searchCarResultObject.emit(obj);
  }

  openTabContent(title: string, event: Event) {
    event.preventDefault();

    if (title === 'add') {
      this.added = true;
      this.search = false;
      this.currentTab = 1;
    } else {
      this.search = true;
      this.added = false;
      this.currentTab = 2;
    }

  }
}
