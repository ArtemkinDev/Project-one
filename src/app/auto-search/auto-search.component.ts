import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auto-search',
  templateUrl: './auto-search.component.html',
  styleUrls: ['./auto-search.component.scss']
})
export class AutoSearchComponent implements OnInit {
  @Output('SearchCarResult') SearchCarResult: EventEmitter <object> = new EventEmitter();
  public searchCar = '';
  public searchYear = '';
  public searchPrice = '';

  constructor() { }

  findCar() {
    console.log('click');

    this.SearchCarResult.emit({
      searchCar: this.searchCar,
      searchYear: this.searchYear,
      searchPrice: this.searchPrice
    });
  }
  ngOnInit() {
  }

}
