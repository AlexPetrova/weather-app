import { TemperatureUnit } from './weather';

export type WeatherCard = {
    timeStamp: number;
    temp: number;
    iconCode: string;
    index: number;
    unit: TemperatureUnit;
}