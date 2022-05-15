import { Coordinates } from '../types';

export enum LocalStorageKeys {
  CITY = 'city',
  CURRENT_WEATHER = 'currentWeather',
  FORECAST_WEATHER = 'forecastWeather',
  LAST_FETCH_DATE = 'lastFetchDate',
  COORDINATES = 'coordinates',
}

export const getLastFetchDate = () => new Date(Number(localStorage.getItem(LocalStorageKeys.LAST_FETCH_DATE)));
export const updateLastFetchDate = () => localStorage.setItem(LocalStorageKeys.LAST_FETCH_DATE, String(Date.now()));

export const getCoordinates = (): Coordinates | null => {
  const coordinates = localStorage.getItem(LocalStorageKeys.COORDINATES);
  if (!coordinates) {
    return null;
  }
  return JSON.parse(coordinates) as Coordinates;
};
export const setCoordinates = (coordinates: Coordinates) =>
  localStorage.setItem(LocalStorageKeys.COORDINATES, JSON.stringify(coordinates));

export const getCity = () => localStorage.getItem(LocalStorageKeys.CITY);
