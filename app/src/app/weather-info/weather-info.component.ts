import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeatherDataService } from '../service';
import { WeatherAPIResponse, WeatherInfo, Description, TemperatureUnit } from '../../types';
import { WeekdayService } from '../service/weekday.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  weatherData: WeatherAPIResponse = {
    list: [{
      weather: [{
        icon: ""
      } as Description
      ],
      main: {}
    } as WeatherInfo
    ],
    city: {
      name: "loading..."
    }
  } as WeatherAPIResponse;
  weatherInfo: WeatherInfo = { main: {} } as WeatherInfo;
  weekday: string;
  unit: TemperatureUnit = TemperatureUnit.Celsius;
  isCelsius: boolean = true;

  @Input() cityName: string = "Sofia";

  constructor(
    private route: ActivatedRoute,
    private weatherDataService: WeatherDataService,
    private weekdayService: WeekdayService) { }

  ngOnInit() {
    this.cityName = this.route.snapshot.paramMap.get("cityName");

    this.weatherDataService
      .fromURL("http://api.openweathermap.org/data/2.5/forecast")
      .withAppID("")
      .forCity(this.cityName)
      .withUnitFormat(this.unit)
      .get()
      .subscribe(data => this.onWeatherData(data),
        error => console.error(error));

    this.weekday = this.weekdayService.getCurrentDayName();
  }

  onWeatherData(data: WeatherAPIResponse) {
    this.weatherData = data;
    this.weatherInfo = this.weatherData.list[0];
  }

  onCardClicked(index: number) {
    this.weatherInfo = this.weatherData.list[index];
  }

  onUnitClick(unit: string) {
    this.unit = TemperatureUnit[unit];
    this.isCelsius = TemperatureUnit[unit] === TemperatureUnit.Celsius;
  }
}
