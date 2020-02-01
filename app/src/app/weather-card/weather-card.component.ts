import { Component, OnInit, Input } from '@angular/core';
import { WeatherInfo } from 'src/types';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherInfo: WeatherInfo;

  constructor() { }

  ngOnInit() {
    console.log(this.weatherInfo);
  }

}
