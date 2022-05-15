export enum LocalStorageKeys {
  CITY = 'city',
  CURRENT_WEATHER = 'currentWeather',
  FORECAST_WEATHER = 'forecastWeather',
  LAST_FETCH_DATE = 'lastFetchDate',
}

export const getLastFetchDate = () => new Date(Number(localStorage.getItem(LocalStorageKeys.LAST_FETCH_DATE)));
export const updateLastFetchDate = () => localStorage.setItem(LocalStorageKeys.LAST_FETCH_DATE, String(Date.now()));
