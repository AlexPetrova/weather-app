import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { MomentService } from '../service/moment.service';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  constructor(private momentService: MomentService) { }

  /**
   * Transforms number representation of date to custom format 
   * @param value date as number 
   * @param format string format of the date - example DD/MM/YYYY
   * @returns string date represented in the passed format
   */
  transform(value: number, format: string): string {
    return this.momentService.format(value, format);
  }
}
