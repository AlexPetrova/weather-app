import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherDataService } from './service';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { WeekdayService } from './service/weekday.service';
import { RoundPipe } from './pipe/round.pipe';
import { UnitConverterPipe } from './pipe/unit-converter.pipe';
import { MomentService } from './service/moment.service';

const appRoutes: Routes = [
  {
    path: 'city/:cityName', component: WeatherInfoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherInfoComponent,
    DateFormatPipe,
    RoundPipe,
    UnitConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WeatherDataService,
    WeekdayService,
    MomentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
