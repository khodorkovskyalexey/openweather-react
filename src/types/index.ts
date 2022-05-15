export type Weather = {
  temp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
};

export type ForecastWeather = [Weather & { date: Date }];

export type WeeklyWeather = {
  currentWeather: Weather;
  forecastWeather: ForecastWeather;
};
