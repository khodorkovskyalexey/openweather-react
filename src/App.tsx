import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from './api';

import { CityForm, Header, Weather } from './components';
import { WeatherByDay } from './types';

const App: React.FC = () => {
  const initWeather: WeatherByDay = {
    feelsLike: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
  };

  const [city, setCity] = useState('Omsk');
  const [currentWeather, setCurrentWeather] = useState<WeatherByDay>(initWeather);

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  const updateCityAndWeather = (inputCity: string) => {
    setCity(inputCity);
    fetchCurrentWeather(inputCity);
  };

  const fetchCurrentWeather = async (inputCity?: string) => {
    const weather = await getCurrentWeather(inputCity ?? city);
    setCurrentWeather(weather);
  };

  return (
    <div className="App">
      <Header cityName={city} />
      <CityForm city={city} setCity={updateCityAndWeather} />
      <Weather
        temp={currentWeather.temp}
        feelsLike={currentWeather.feelsLike}
        humidity={currentWeather.humidity}
        pressure={currentWeather.pressure}
      />
    </div>
  );
};

export default App;
