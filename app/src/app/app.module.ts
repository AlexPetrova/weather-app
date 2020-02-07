import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherDataService } from './service';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { WeekdayService } from './service/weekday.service';
import { RoundPipe } from './pipe/round.pipe';
import { TempUnitsComponent } from './temp-units/temp-units.component';
import { UnitConverterPipe } from './pipe/unit-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherInfoComponent,
    DateFormatPipe,
    RoundPipe,
    TempUnitsComponent,
    UnitConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherDataService,
    WeekdayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
