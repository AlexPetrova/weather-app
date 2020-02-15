import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../../types';

@Pipe({
  name: 'unitConverter'
})
export class UnitConverterPipe implements PipeTransform {

  /**
   * @param value the number representation of the temperature that will converted
   * @param unit the unit in which the temperature will be converted
   */
  transform(value: number, unit: TemperatureUnit): number {
    if (unit === TemperatureUnit.Celsius) {
      return value;
    }
    else {
      return value * 1.8 + 32;
    }
  }
}
