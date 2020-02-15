import { HttpClient, HttpHandler } from "@angular/common/http";
import { WeatherDataService } from '.';
import { WeatherResponseMock } from './mock';
import { Observable } from 'rxjs';
import { WeatherAPIResponse } from 'src/types';

describe('WeatherDataService', () => {
    it('should return weather data', () => {
        const httpClient = new HttpClient({} as HttpHandler);
        const observable = new Observable(subscriber => {
            subscriber.next(WeatherResponseMock);
            subscriber.complete();
        });
        spyOn(httpClient, 'get').and.returnValue(observable);
        const weatherService = new WeatherDataService(httpClient);

        let response: WeatherAPIResponse;
        weatherService.get()
            .subscribe(data => response = data);

        expect(response).toBe(WeatherResponseMock);
    });
});