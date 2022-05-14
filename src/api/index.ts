import { WeeklyWeather } from '../types';

type FetchedCord = {
  lat: number;
  lon: number;
};

type FetchedWeather = {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  daily: [
    {
      dt: number;
      temp: {
        day: number;
      };
      feels_like: {
        day: number;
      };
      humidity: number;
      pressure: number;
    },
  ];
};

export async function getWeather(city: string): Promise<WeeklyWeather> {
  const cordsUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}`;
  const { lat, lon } = (await fetch(cordsUrl).then((res) => res.json()))[0] as FetchedCord;

  const openweatherUrl = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,alerts&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}&units=metric&lang=ru`;
  const weather = (await fetch(openweatherUrl).then((res) => res.json())) as FetchedWeather;

  return {
    currentWeather: {
      temp: weather.current.temp,
      feelsLike: weather.current.feels_like,
      humidity: weather.current.humidity,
      pressure: weather.current.pressure,
    },
    forecastWeather: weather.daily.map((weather: any) => ({
      date: new Date(weather.dt),
      feelsLike: weather.feels_like.day,
      humidity: weather.humidity,
      pressure: weather.pressure,
      temp: weather.temp.day,
    })),
  } as WeeklyWeather;
}
