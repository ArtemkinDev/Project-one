import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import { HoverDirective } from './directives/hover.directive';
import { IdPipe } from './pipes/id.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    HoverDirective,
    IdPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
