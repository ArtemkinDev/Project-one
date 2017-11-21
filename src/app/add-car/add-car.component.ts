import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Car} from '../car/Car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  @Output('carAdded') carEmitte = new EventEmitter<Car>();
  @ViewChild('carNameInput') carNameInput: ElementRef;
  @ViewChild('carPriceInput') carPriceInput: ElementRef;

  public carYear;
  public addCarStatus = false;

  addCar() {
    this.addCarStatus = true;

    this.carEmitte.emit({
      id: Date.now(),
      name: this.carNameInput.nativeElement.value,
      year: this.carYear,
      price: this.carPriceInput.nativeElement.value,
      availability: true
    });

    this.carNameInput.nativeElement.value = ' ';
    this.carPriceInput.nativeElement.value = ' ';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
