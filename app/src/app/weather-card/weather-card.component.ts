import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeekdayService } from '../service/weekday.service';
import { WeatherIcons } from '../../types';

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