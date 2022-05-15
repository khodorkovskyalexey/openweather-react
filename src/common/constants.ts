import { Coordinates, ForecastWeather, Weather } from '../types';

export const defaultCity: string = 'Omsk';

export const defaultCoordinates: Coordinates = {
  lat: 54.991375,
  lon: 73.371529,
};

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
