export type Weather = {
  temp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
};

export type WeeklyWeather = {
  currentWeather: Weather;
  forecastWeather: [Weather & { date: Date }];
};
