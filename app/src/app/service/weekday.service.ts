import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Weekdays } from '../../types';
import { MomentService } from './moment.service';

@Injectable({
  providedIn: 'root'
})
export class WeekdayService {

  constructor(private momentService: MomentService) { }

  /**
   * Returns the name of the week day  
   */
  getCurrentDayName(): string {
    let dayNumber = this.momentService.isoWeekday(new Date().getTime());
    return Weekdays[dayNumber];
  }

  /**
   * Returns the name of the week day from @timeStamp
   * 
   * @param timeStamp the date from which the name will be extracted 
   * @returns weekday as string
   */
  getDayName(timeStamp: number) {
    let dayNumber = this.momentService.isoWeekday(timeStamp);
    return Weekdays[dayNumber];
  }
}
