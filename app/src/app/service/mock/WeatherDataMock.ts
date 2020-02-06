import { WeatherAPIResponse } from '../../../types';

export const WeatherResponseMock: WeatherAPIResponse = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1580515200,
            "main": {
                "temp": 5.32,
                "feels_like": 0.84,
                "temp_min": 3.25,
                "temp_max": 5.32,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 904,
                "humidity": 65,
                "temp_kf": 2.07
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 3.42,
                "deg": 259
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-01 00:00:00"
        },
        {
            "dt": 1580526000,
            "main": {
                "temp": 3.44,
                "feels_like": -0.52,
                "temp_min": 1.89,
                "temp_max": 3.44,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 905,
                "humidity": 77,
                "temp_kf": 1.55
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 60
            },
            "wind": {
                "speed": 2.78,
                "deg": 259
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-01 03:00:00"
        },
        {
            "dt": 1580536800,
            "main": {
                "temp": 2.86,
                "feels_like": -0.73,
                "temp_min": 1.82,
                "temp_max": 2.86,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 905,
                "humidity": 85,
                "temp_kf": 1.04
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 31
            },
            "wind": {
                "speed": 2.42,
                "deg": 258
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-01 06:00:00"
        },
        {
            "dt": 1580547600,
            "main": {
                "temp": 8.69,
                "feels_like": 5.69,
                "temp_min": 8.17,
                "temp_max": 8.69,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 906,
                "humidity": 68,
                "temp_kf": 0.52
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 2.17,
                "deg": 277
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-01 09:00:00"
        },
        {
            "dt": 1580558400,
            "main": {
                "temp": 10.56,
                "feels_like": 7.59,
                "temp_min": 10.56,
                "temp_max": 10.56,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 905,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 2.25,
                "deg": 289
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-01 12:00:00"
        },
        {
            "dt": 1580569200,
            "main": {
                "temp": 7.84,
                "feels_like": 5.96,
                "temp_min": 7.84,
                "temp_max": 7.84,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 905,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.82,
                "deg": 312
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-01 15:00:00"
        },
        {
            "dt": 1580580000,
            "main": {
                "temp": 4.92,
                "feels_like": 2.58,
                "temp_min": 4.92,
                "temp_max": 4.92,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 905,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.1,
                "deg": 227
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-01 18:00:00"
        },
        {
            "dt": 1580590800,
            "main": {
                "temp": 4.45,
                "feels_like": 1.64,
                "temp_min": 4.45,
                "temp_max": 4.45,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 905,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.58,
                "deg": 242
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-01 21:00:00"
        },
        {
            "dt": 1580601600,
            "main": {
                "temp": 3.74,
                "feels_like": 0.82,
                "temp_min": 3.74,
                "temp_max": 3.74,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 905,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.65,
                "deg": 259
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-02 00:00:00"
        },
        {
            "dt": 1580612400,
            "main": {
                "temp": 2.99,
                "feels_like": 0.05,
                "temp_min": 2.99,
                "temp_max": 2.99,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 904,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.63,
                "deg": 273
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-02 03:00:00"
        },
        {
            "dt": 1580623200,
            "main": {
                "temp": 2.55,
                "feels_like": -0.62,
                "temp_min": 2.55,
                "temp_max": 2.55,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 905,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 1.86,
                "deg": 248
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-02 06:00:00"
        },
        {
            "dt": 1580634000,
            "main": {
                "temp": 9.04,
                "feels_like": 6.32,
                "temp_min": 9.04,
                "temp_max": 9.04,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 906,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.58,
                "deg": 285
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-02 09:00:00"
        },
        {
            "dt": 1580644800,
            "main": {
                "temp": 10.25,
                "feels_like": 6.52,
                "temp_min": 10.25,
                "temp_max": 10.25,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 906,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 33
            },
            "wind": {
                "speed": 3.14,
                "deg": 316
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-02 12:00:00"
        },
        {
            "dt": 1580655600,
            "main": {
                "temp": 7.95,
                "feels_like": 5.5,
                "temp_min": 7.95,
                "temp_max": 7.95,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 906,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 1.46,
                "deg": 297
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-02 15:00:00"
        },
        {
            "dt": 1580666400,
            "main": {
                "temp": 4.83,
                "feels_like": 2.35,
                "temp_min": 4.83,
                "temp_max": 4.83,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 907,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 33
            },
            "wind": {
                "speed": 1.32,
                "deg": 254
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-02 18:00:00"
        },
        {
            "dt": 1580677200,
            "main": {
                "temp": 4.13,
                "feels_like": 1.37,
                "temp_min": 4.13,
                "temp_max": 4.13,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 907,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "50n"
                }
            ],
            "clouds": {
                "all": 87
            },
            "wind": {
                "speed": 1.52,
                "deg": 228
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-02 21:00:00"
        },
        {
            "dt": 1580688000,
            "main": {
                "temp": 3.87,
                "feels_like": 0.74,
                "temp_min": 3.87,
                "temp_max": 3.87,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 906,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "11n"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 1.98,
                "deg": 241
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-03 00:00:00"
        },
        {
            "dt": 1580698800,
            "main": {
                "temp": 3.23,
                "feels_like": 0.08,
                "temp_min": 3.23,
                "temp_max": 3.23,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 904,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 85
            },
            "wind": {
                "speed": 1.98,
                "deg": 269
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-03 03:00:00"
        },
        {
            "dt": 1580709600,
            "main": {
                "temp": 3.38,
                "feels_like": 0.03,
                "temp_min": 3.38,
                "temp_max": 3.38,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 905,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 2.22,
                "deg": 267
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-03 06:00:00"
        },
        {
            "dt": 1580720400,
            "main": {
                "temp": 8.19,
                "feels_like": 4.58,
                "temp_min": 8.19,
                "temp_max": 8.19,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 905,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.82,
                "deg": 281
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-03 09:00:00"
        },
        {
            "dt": 1580731200,
            "main": {
                "temp": 10.51,
                "feels_like": 6.97,
                "temp_min": 10.51,
                "temp_max": 10.51,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 903,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "11d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.69,
                "deg": 269
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-03 12:00:00"
        },
        {
            "dt": 1580742000,
            "main": {
                "temp": 8.56,
                "feels_like": 5.13,
                "temp_min": 8.56,
                "temp_max": 8.56,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 902,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 2.54,
                "deg": 259
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-03 15:00:00"
        },
        {
            "dt": 1580752800,
            "main": {
                "temp": 6.78,
                "feels_like": 3.29,
                "temp_min": 6.78,
                "temp_max": 6.78,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 904,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "09n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.39,
                "deg": 252
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-03 18:00:00"
        },
        {
            "dt": 1580763600,
            "main": {
                "temp": 5.72,
                "feels_like": 2.42,
                "temp_min": 5.72,
                "temp_max": 5.72,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 904,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.15,
                "deg": 264
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-03 21:00:00"
        },
        {
            "dt": 1580774400,
            "main": {
                "temp": 4.66,
                "feels_like": 1.56,
                "temp_min": 4.66,
                "temp_max": 4.66,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 904,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 1.81,
                "deg": 249
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-04 00:00:00"
        },
        {
            "dt": 1580785200,
            "main": {
                "temp": 4.39,
                "feels_like": 1.31,
                "temp_min": 4.39,
                "temp_max": 4.39,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 903,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.71,
                "deg": 268
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-04 03:00:00"
        },
        {
            "dt": 1580796000,
            "main": {
                "temp": 4.02,
                "feels_like": 0.97,
                "temp_min": 4.02,
                "temp_max": 4.02,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 902,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 1.63,
                "deg": 254
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-04 06:00:00"
        },
        {
            "dt": 1580806800,
            "main": {
                "temp": 10.6,
                "feels_like": 7.78,
                "temp_min": 10.6,
                "temp_max": 10.6,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 901,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.69,
                "deg": 263
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-04 09:00:00"
        },
        {
            "dt": 1580817600,
            "main": {
                "temp": 13.2,
                "feels_like": 10.49,
                "temp_min": 13.2,
                "temp_max": 13.2,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 897,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.73,
                "deg": 266
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-04 12:00:00"
        },
        {
            "dt": 1580828400,
            "main": {
                "temp": 11.22,
                "feels_like": 8.48,
                "temp_min": 11.22,
                "temp_max": 11.22,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 893,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 7
            },
            "wind": {
                "speed": 1.9,
                "deg": 231
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-04 15:00:00"
        },
        {
            "dt": 1580839200,
            "main": {
                "temp": 7.99,
                "feels_like": 4.71,
                "temp_min": 7.99,
                "temp_max": 7.99,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 891,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 47
            },
            "wind": {
                "speed": 2.05,
                "deg": 242
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-04 18:00:00"
        },
        {
            "dt": 1580850000,
            "main": {
                "temp": 6.55,
                "feels_like": 3,
                "temp_min": 6.55,
                "temp_max": 6.55,
                "pressure": 998,
                "sea_level": 998,
                "grnd_level": 887,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 2.46,
                "deg": 235
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-04 21:00:00"
        },
        {
            "dt": 1580860800,
            "main": {
                "temp": 8.12,
                "feels_like": 2.05,
                "temp_min": 8.12,
                "temp_max": 8.12,
                "pressure": 998,
                "sea_level": 998,
                "grnd_level": 885,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 6.26,
                "deg": 224
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-05 00:00:00"
        },
        {
            "dt": 1580871600,
            "main": {
                "temp": -0.43,
                "feels_like": -5.81,
                "temp_min": -0.43,
                "temp_max": -0.43,
                "pressure": 999,
                "sea_level": 999,
                "grnd_level": 887,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 67
            },
            "wind": {
                "speed": 4.34,
                "deg": 270
            },
            "snow": {
                "3h": 2.69
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-05 03:00:00"
        },
        {
            "dt": 1580882400,
            "main": {
                "temp": -0.78,
                "feels_like": -6.25,
                "temp_min": -0.78,
                "temp_max": -0.78,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 888,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 78
            },
            "wind": {
                "speed": 4.14,
                "deg": 260
            },
            "snow": {
                "3h": 0.75
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-05 06:00:00"
        },
        {
            "dt": 1580893200,
            "main": {
                "temp": 0.34,
                "feels_like": -5.5,
                "temp_min": 0.34,
                "temp_max": 0.34,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 890,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "50d"
                }
            ],
            "clouds": {
                "all": 54
            },
            "wind": {
                "speed": 4.64,
                "deg": 274
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-05 09:00:00"
        },
        {
            "dt": 1580904000,
            "main": {
                "temp": 1.36,
                "feels_like": -5.27,
                "temp_min": 1.36,
                "temp_max": 1.36,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 889,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "09d"
                }
            ],
            "clouds": {
                "all": 72
            },
            "wind": {
                "speed": 5.76,
                "deg": 289
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-05 12:00:00"
        },
        {
            "dt": 1580914800,
            "main": {
                "temp": -0.87,
                "feels_like": -7.52,
                "temp_min": -0.87,
                "temp_max": -0.87,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 890,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 5.73,
                "deg": 286
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-05 15:00:00"
        },
        {
            "dt": 1580925600,
            "main": {
                "temp": -1.81,
                "feels_like": -6.96,
                "temp_min": -1.81,
                "temp_max": -1.81,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 892,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 83
            },
            "wind": {
                "speed": 3.73,
                "deg": 278
            },
            "snow": {
                "3h": 0.25
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-05 18:00:00"
        },
        {
            "dt": 1580936400,
            "main": {
                "temp": -2.8,
                "feels_like": -7.55,
                "temp_min": -2.8,
                "temp_max": -2.8,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 895,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.18,
                "deg": 310
            },
            "snow": {
                "3h": 1.06
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-05 21:00:00"
        }
    ],
    "city": {
        "id": 727011,
        "name": "Sofia",
        "coord": {
            "lat": 42.6975,
            "lon": 23.3242
        },
        "country": "BG",
        "timezone": 7200,
        "sunrise": 1580449373,
        "sunset": 1580485023
    }
}