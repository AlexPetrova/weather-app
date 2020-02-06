
export type MainInfo = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    grnd_level: number,
    sea_level: number,
    humidity: number,
    temp_kf: number
}

export type Description = {
    id: number,
    main: string,
    description: string,
    icon: string
}

export type Cloud = {
    all: number
}

export type Wind = {
    speed: number,
    deg: number
}
export type Snow = {
    [key: string]: number
}

export type City = {
    id: number,
    name: string,
    coord: { [key: string]: number },
    country: string,
    timezone: number,
    sunrise: number,
    sunset: number
}

export type WeatherInfo = {
    dt: number,
    main: MainInfo,
    weather: Description[],
    clouds: Cloud,
    wind: Wind,
    snow?: Snow,
    dt_txt: string,
    sys: { [key: string]: any },
}

export type WeatherAPIResponse = {
    cod: string,
    message: number,
    cnt: number,
    list: WeatherInfo[],
    city: City
}

export enum WeatherIcons {
    '01d' = 'clear-sky-day',
    '01n' = 'clear-sky-night',
    '02d' = 'few-clouds-day',
    '02n' = 'few-clouds-night',
    '03d' = 'scattered-clouds-day',
    '03n' = 'scattered-clouds-night',
    '04d' = 'broken-clouds-day',
    '04n' = 'broken-clouds-night',
    '09d' = 'shower-rain-day',
    '09n' = 'shower-rain-night',
    '10d' = 'rain-day',
    '10n' = 'rain-night',
    '11d' = 'thunderstorm-day',
    '11n' = 'thunderstorm-night',
    '13d' = 'snow-night',
    '13n' = 'snow-night',
    '50d' = 'mist-day',
    '50n' = 'mist-night'
}