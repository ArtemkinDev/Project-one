import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Car} from '../car/Car';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  @ViewChild('carNameInput') carNameInput: ElementRef;
  @ViewChild('carPriceInput') carPriceInput: ElementRef;

  public carYear;
  public addCarStatus = false;
  public cars: Car[];

  addCar() {
    this.addCarStatus = true;

    this.service.newCarAdded({
      id: Date.now(),
      name: this.carNameInput.nativeElement.value,
      year: this.carYear,
      price: this.carPriceInput.nativeElement.value,
      availability: true
    })
      .subscribe((car: Car) => {

      });

    this.carNameInput.nativeElement.value = ' ';
    this.carPriceInput.nativeElement.value = ' ';
  }

  constructor(private service: CarsService) {}

  ngOnInit() {}

}
