import { WeatherAPIResponse, TemperatureUnit } from '../../types';
import { WeatherResponseMock } from './mock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx'

@Injectable()
export class WeatherDataService {
    private url: string = "";

    constructor(private http: HttpClient) {
    }

    get(): Observable<WeatherAPIResponse> {
        return this.http.get(this.url)
            .map(response => <WeatherAPIResponse>response)
            .catch(error => Observable.throw(error.json().error || 'Server error'));
        // return WeatherResponseMock
    }

    forCityID(id: number) {
        this.url += `id=${id}&`;
        return this;
    }

    withUnitFormat(unit: TemperatureUnit) {
        this.url += `units=${unit}&`;
        return this;
    }

    fromURL(url: string) {
        this.url += `${url}?`;
        return this;
    }

    withAppID(id: string) {
        this.url += `APPID=${id}&`;
        return this;
    }
}
