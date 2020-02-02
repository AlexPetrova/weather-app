import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../service';
import { WeatherAPIResponse } from '../../types';
import { WeekdayService } from '../service/weekday.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  weatherData: WeatherAPIResponse = {
    list: [], city: {
      name: "loading..."
    }
  } as WeatherAPIResponse;
  weekday: string;

  constructor(private weatherDataService: WeatherDataService,
    private weekdayService: WeekdayService) { }

  async ngOnInit() {
    this.weatherData = await this.weatherDataService.getData();
    this.weekday = this.weekdayService.getCurrentDayName();
  }
}
