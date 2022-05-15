import React, { useEffect } from 'react';
import { getWeather } from './api';
import { defaultCity, defaultForecastWeather, defaultWeather } from './common/constants';

import { CityForm, Header, WeatherCard, WeatherGroup } from './components';
import { useLocalStorage } from './hooks';
import { getLastFetchDate, updateLastFetchDate } from './store';
import { isDateToday } from './utils';

const App: React.FC = () => {
  const [city, setCity] = useLocalStorage('city', defaultCity);
  const [currentWeather, setCurrentWeather] = useLocalStorage('currentWeather', defaultWeather);
  const [forecastWeather, setForecastWeather] = useLocalStorage('forecastWeather', defaultForecastWeather);

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
    setForecastWeather(weather.forecastWeather);
    updateLastFetchDate();
  };

  return (
    <div className="App">
      <Header cityName={city} updateWeather={fetchCurrentWeather} />
      <CityForm city={city} setCity={fetchCurrentWeather} />
      <WeatherGroup>
        <WeatherCard weather={currentWeather} />
      </WeatherGroup>
      <WeatherGroup>
        {forecastWeather.map((weather, index) => (
          <WeatherCard weather={weather} date={weather.date} key={index} />
        ))}
      </WeatherGroup>
    </div>
  );
};

export default App;
