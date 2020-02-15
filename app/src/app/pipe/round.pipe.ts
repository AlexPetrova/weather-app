import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  /**
   * @param value number which will be rounded
   * @returns the value rounded with Math.round JS function
   */
  transform(value: number): number {
    return Math.round(value);
  }
}
