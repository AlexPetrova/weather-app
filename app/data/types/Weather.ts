
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