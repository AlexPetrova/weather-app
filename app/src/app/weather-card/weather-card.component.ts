import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeekdayService } from '../service/weekday.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() timeStamp: number;
  @Input() temp: number;
  @Input() iconCode: string;
  @Input() index: number;

  @Output() cardClicked: EventEmitter<number> =
    new EventEmitter<number>();

  iconClass: string;
  weekday: string;

  constructor(private weekdayService: WeekdayService) { }

  ngOnInit() {
    this.iconClass = WeatherIcons[this.iconCode];
    this.weekday = this.weekdayService.getDayNameFromTimeStamp(this.timeStamp);
  }

  onCardClick(): void {
    this.cardClicked.emit(this.index);
  }
}

export enum WeatherIcons {
  '01d' = 'clear-sky-day',
  '01n' = 'clear-sky-night',
  '02d' = 'few-clouds-day',
  '02n' = 'few-clouds-night',
  '03d' = 'scattered-clouds-day',
  '03n' = 'scattered-clouds-night',
  '04d' = 'broken-clouds-day',
  '04n' = 'broken-clouds-night',
  '09d' = 'shower-rain-day',
  '09n' = 'shower-rain-night',
  '10d' = 'rain-day',
  '10n' = 'rain-night',
  '11d' = 'thunderstorm-day',
  '11n' = 'thunderstorm-night',
  '13d' = 'snow-night',
  '13n' = 'snow-night',
  '50d' = 'mist-day',
  '50n' = 'mist-night'
}