import { WeatherAPIResponse } from "./types/index";

export class WeatherData {
    apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getData(): Promise<WeatherAPIResponse> {
        let response = await fetch(this.apiUrl);
        return response.json();
    }
}
