import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Weekdays } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class WeekdayService {

  getCurrentDayName(): string {
    let dayNumber = moment().isoWeekday();
    return Weekdays[dayNumber];
  }

  getDayNameFromTimeStamp(timeStamp: number) {
    let dayNumber = moment.unix(timeStamp).isoWeekday();
    return Weekdays[dayNumber]
  }
}
