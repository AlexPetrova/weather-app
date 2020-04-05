import { WeatherAPIResponse, TemperatureUnit } from '../../types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx'

@Injectable()
export class WeatherDataService {
    private url: string = "";

    constructor(private http: HttpClient) { }

    /**
     * @returns observable on which successful resolution an WeatherApiResponse will be returned
     * @throws when there is network error  
     */
    get(): Observable<WeatherAPIResponse> {
        return this.http.get(this.url)
            .map(response => <WeatherAPIResponse>response)
            .catch(error => Observable.throw(error.json().error || 'Server error'));
    }

    /**
     * Sets the city name for the current call
     * @param name string name of city
     */
    forCity(name: string) {
        this.url += `q=${name}&`;
        return this;
    }

    /**
     * Sets the unit for the call
     * @param unit temperature unit (Fahrenheit, Celsius or Kelvin)
     */
    withUnitFormat(unit: TemperatureUnit) {
        this.url += `units=${unit}&`;
        return this;
    }

    /**
     * Sets the url for the api from which the data will be retrieved
     * @param url weather service url
     */
    fromURL(url: string) {
        this.url += `${url}?`;
        return this;
    }

    /**
     * Sets the secret app id for the weather api
     * @param id secret app id for the weather api
     */
    withAppID(id: string) {
        this.url += `APPID=${id}&`;
        return this;
    }
}
