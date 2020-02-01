import { Component, OnInit, Inject } from '@angular/core';
import { WeatherDataService } from '../service';
import { WeatherAPIResponse } from '../../types';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  weatherData: WeatherAPIResponse = { list: [] } as WeatherAPIResponse;

  constructor(private weatherDataService: WeatherDataService) { }

  async ngOnInit() {
    this.weatherData = await this.weatherDataService.getData();
  }
}
