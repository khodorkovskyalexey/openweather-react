import React, { useEffect, useState } from 'react';

import './App.css';
import { CityForm, Header, Weather } from './components';

const App = () => {
  const [city, setCity] = useState('Omsk');
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      getCurrentWeather();
    };
    fetchData();
  }, []);

  async function getCurrentWeather(inputCity?: string) {
    const actualCity = inputCity ?? city;
    const openweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${actualCity}&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}&units=metric`;
    const weather = await fetch(openweatherUrl).then((res) => res.json());
    console.log(weather);
    setTemp(weather.main.temp);
    setFeelsLike(weather.main.feels_like);
    setHumidity(weather.main.humidity);
    setPressure(weather.main.pressure);
  }

  async function updateWeather(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    let inputCity = e.target.city.value;
    if (!inputCity.trim().length) {
      inputCity = city;
    }
    getCurrentWeather(inputCity);
    setCity(inputCity);
  }

  return (
    <div className="App">
      <Header cityName={city} />
      <CityForm weatherMethod={updateWeather} />
      <Weather temp={temp} feelsLike={feelsLike} humidity={humidity} pressure={pressure} />
    </div>
  );
};

export default App;
