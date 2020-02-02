import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WeekdayService {

  getCurrentDayName(): string {
    let dayNumber = moment().isoWeekday();
    return Weekdays[dayNumber];
  }
}
export enum Weekdays {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}