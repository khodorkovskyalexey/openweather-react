import React, { useEffect, useState } from 'react';

import { CityForm, Header, Weather } from './components';
import { WeatherByDay } from './types';

const App: React.FC = () => {
  const [city, setCity] = useState('Omsk');
  const [currentWeather, setCurrentWeather] = useState<WeatherByDay>(new WeatherByDay());

  useEffect(() => {
    const fetchData = async () => {
      await getCurrentWeather();
    };
    fetchData();
  }, []);

  const getCurrentWeather = async (inputCity?: string) => {
    const actualCity = inputCity ?? city;
    const openweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${actualCity}&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}&units=metric`;
    const weather = await fetch(openweatherUrl).then((res) => res.json());
    if (weather.cod === '404') {
      throw new Error('Invalid city name');
    }
    setCurrentWeather({
      temp: weather.main.temp,
      feelsLike: weather.main.feels_like,
      humidity: weather.main.humidity,
      pressure: weather.main.pressure,
    });
  };

  const updateWeather = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let inputCity = e.target.city.value;
    if (!inputCity.trim().length) {
      inputCity = city;
    }
    await getCurrentWeather(inputCity);
    setCity(inputCity);
  };

  return (
    <div className="App">
      <Header cityName={city} />
      <CityForm weatherMethod={updateWeather} />
      <Weather
        date={new Date()}
        temp={currentWeather.temp}
        feelsLike={currentWeather.feelsLike}
        humidity={currentWeather.humidity}
        pressure={currentWeather.pressure}
      />
    </div>
  );
};

export default App;
