import React, { useEffect } from 'react';
import { getCurrentWeather } from './api';
import { defaultCity, defaultWeather } from './common/constants';

import { CityForm, Header, Weather } from './components';
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
    const weather = await getCurrentWeather(inputCity ?? city);
    setCurrentWeather(weather);
    updateLastFetchDate();
  };

  return (
    <div className="App">
      <Header cityName={city} />
      <CityForm city={city} setCity={fetchCurrentWeather} />
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
