import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherDataService } from './service';
import { DateFormatPipe } from './pipe/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherInfoComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
