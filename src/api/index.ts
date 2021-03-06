import { defaultCoordinates } from '../common/constants';
import { getCity, getCoordinates, setCoordinates } from '../store';
import { Coordinates, WeeklyWeather } from '../types';
import { nextFiveDaysFilter } from '../utils';

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

const baseOpenweatherApiUrl = 'http://api.openweathermap.org';

export async function getWeather(city: string): Promise<WeeklyWeather> {
  let { lat, lon } = defaultCoordinates;
  const coordinates = getCoordinates();
  if (getCity() === city && coordinates) {
    lat = coordinates.lat;
    lon = coordinates.lon;
  } else {
    const cordsUrl = `${baseOpenweatherApiUrl}/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}`;
    const fecthCoordinates = (await fetch(cordsUrl).then((res) => res.json()))[0] as Coordinates;
    lat = fecthCoordinates.lat;
    lon = fecthCoordinates.lon;
    setCoordinates({ lat, lon });
  }

  const openweatherUrl = `${baseOpenweatherApiUrl}/data/2.5/onecall?exclude=minutely,hourly,alerts&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}&units=metric&lang=ru`;
  const weather = (await fetch(openweatherUrl).then((res) => res.json())) as FetchedWeather;
  const forecastWeather = nextFiveDaysFilter(
    weather.daily.map((weather) => {
      weather.dt = weather.dt * 1000; // приходит время 1970 года, если добавить три нуля, то получится актуальное
      return weather;
    }),
    'dt',
  ).map((weather: FetchedWeather['daily'][0]) => ({
    date: new Date(weather.dt),
    feelsLike: weather.feels_like.day,
    humidity: weather.humidity,
    pressure: weather.pressure,
    temp: weather.temp.day,
  }));

  return {
    currentWeather: {
      temp: weather.current.temp,
      feelsLike: weather.current.feels_like,
      humidity: weather.current.humidity,
      pressure: weather.current.pressure,
    },
    forecastWeather,
  } as WeeklyWeather;
}
