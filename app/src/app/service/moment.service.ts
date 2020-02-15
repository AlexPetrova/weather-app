import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

/**
 * Moment wrapper
 */
export class MomentService {
  constructor() { }

  /**
   * @returns the todays day of the week as number
   * example: Monday = 1 ... Sunday = 7
   */
  isoWeek(): number {
    return moment().isoWeek();
  }

  /**
   * @param timeStamp the stamp from which the name of the day will be extracted
   * @returns the todays day of the week as number
   * example: Monday = 1 ... Sunday = 7
   */
  isoWeekday(timeStamp: number): number {
    return moment.unix(timeStamp).isoWeekday()
  }

  /**
   * Transforms number representation of date to custom format
   * @param timeStamp date as number
   * @param format string format of the return date - example DD/MM/YYYY
   * @returns string date represented in the passed format
   */
  format(timeStamp: number, format: string) {
    return moment.unix(timeStamp).format(format);
  }
}
