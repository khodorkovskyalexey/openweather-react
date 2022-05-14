import React, { useEffect } from 'react';
import { getWeather } from './api';
import { defaultCity, defaultWeather } from './common/constants';

import { CityForm, Header, WeatherCard } from './components';
import { useLocalStorage } from './hooks';
import { getLastFetchDate, updateLastFetchDate } from './store';
import { isDateToday } from './utils';

const App: React.FC = () => {
  const [city, setCity] = useLocalStorage('city', defaultCity);
  const [currentWeather, setCurrentWeather] = useLocalStorage('currentWeather', defaultWeather);

  useEffect(() => {
    const lastFetchDate = getLastFetchDate();
    if (!isDateToday(lastFetchDate)) {
      fetchCurrentWeather();
    }
  }, []);

  const fetchCurrentWeather = async (inputCity?: string) => {
    if (inputCity) {
      setCity(inputCity);
    }
    const weather = await getWeather(inputCity ?? city);
    setCurrentWeather(weather.currentWeather);
    updateLastFetchDate();
  };

  return (
    <div className="App">
      <Header cityName={city} updateWeather={fetchCurrentWeather} />
      <CityForm city={city} setCity={fetchCurrentWeather} />
      <WeatherCard weather={currentWeather} />
    </div>
  );
};

export default App;
