import { ForecastWeather, Weather } from '../types';

export const defaultCity: string = 'Omsk';

export const defaultWeather: Weather = {
  feelsLike: 0,
  humidity: 0,
  pressure: 0,
  temp: 0,
};

export const defaultForecastWeather: ForecastWeather = [
  {
    ...defaultWeather,
    date: new Date(0),
  },
];
