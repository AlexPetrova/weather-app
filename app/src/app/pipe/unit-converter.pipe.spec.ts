import { UnitConverterPipe } from './unit-converter.pipe';
import { TemperatureUnit } from 'src/types';

describe('UnitConverterPipe', () => {
  it('converts passed value in Celsius to Fahrenheit', () => {
    const pipe = new UnitConverterPipe();

    const temp = pipe.transform(10, TemperatureUnit.Fahrenheit);

    expect(temp).toBe(50);
  });

  it('converts passed value in Fahrenheit in Celsius', () => {
    const pipe = new UnitConverterPipe();

    const temp = pipe.transform(50, TemperatureUnit.Celsius);

    expect(temp).toBe(10);
  });
});
