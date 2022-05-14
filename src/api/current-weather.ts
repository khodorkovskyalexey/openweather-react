import { WeatherByDay } from '../types';

export async function getCurrentWeather(city: string): Promise<WeatherByDay> {
  const openweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}&units=metric`;
  const weather = await fetch(openweatherUrl).then((res) => res.json());
  if (weather.cod === '404') {
    throw new Error('Invalid city name');
  }

  return {
    temp: weather.main.temp,
    feelsLike: weather.main.feels_like,
    humidity: weather.main.humidity,
    pressure: weather.main.pressure,
  } as WeatherByDay;
}
