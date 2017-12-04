import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {FormsModule} from '@angular/forms';
import {AddCarComponent} from './add-car/add-car.component';
import {HoverDirective} from './directives/hover.directive';
import {IdPipe} from './pipes/id.pipe';
import {CarFilterPipe} from './pipes/car-filter.pipe';
import {CarTabComponent} from './car-tab/car-tab.component';
import {AutoSearchComponent} from './auto-search/auto-search.component';
import {CarsService} from './cars.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    HoverDirective,
    IdPipe,
    CarFilterPipe,
    CarTabComponent,
    AutoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
