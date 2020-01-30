
export type MainInfo = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
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

export type WeatherInfo = {
    dt: number,
    main: MainInfo,
    weather: Description[],
    cloud: Cloud,
    wind: Wind,
    dt_txt: string
}

export type WeatherAPIResponse = {
    cod: string,
    message: number,
    cnt: number,
    list: WeatherInfo[]
}