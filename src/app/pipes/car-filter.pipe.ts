import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchObject: object): any {

    if (carList.length === 0 || !searchObject ) {
      return carList;
    }
    return carList.filter((car) => {
      /*if (searchObject.searchCar) {
        car.name.toLowerCase().indexOf(searchObject.searchCar.toLowerCase()) !== -1)
      }*/
     /* const searchCar = searchObject.searchCar;
      return car.name.toLowerCase().indexOf(searchCar.toLowerCase()) !== -1)*/
    }
  }

}
