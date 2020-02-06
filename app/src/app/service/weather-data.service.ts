import { WeatherAPIResponse } from '../../types';
import { WeatherResponseMock } from './mock';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherDataService {
    apiUrl: string;

    constructor() {
        this.apiUrl = 'apiUrl';
    }

    async getData(): Promise<WeatherAPIResponse> {
        return WeatherResponseMock;
        // let response = await fetch(this.apiUrl);
        // return response.json();
    }
}
