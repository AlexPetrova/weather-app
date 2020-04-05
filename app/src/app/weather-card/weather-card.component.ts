import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeekdayService } from '../service/weekday.service';
import { WeatherIcons, TemperatureUnit, WeatherCard } from '../../types';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherCardInfo: WeatherCard;

  @Output() cardClicked: EventEmitter<number> =
    new EventEmitter<number>();

  iconClass: string;
  weekday: string;

  constructor(private weekdayService: WeekdayService) { }

  ngOnInit() {
    this.iconClass = WeatherIcons[this.weatherCardInfo.iconCode];
    this.weekday = this.weekdayService.getDayName(this.weatherCardInfo.timeStamp);
  }

  onCardClick(): void {
    this.cardClicked.emit(this.weatherCardInfo.index);
  }
}