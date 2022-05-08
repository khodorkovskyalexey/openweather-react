import React, { useState } from 'react';

import './App.css';
import { CityForm, Header, Weather } from './components';

const App = () => {
  const [city, setCity] = useState('Omsk');
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  async function currentWeather(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    let inputCity = e.target.city.value;
    if (!inputCity.trim().length) {
      inputCity = city;
    }
    const openweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}&units=metrix`;
    const weather = await fetch(openweatherUrl).then((res) => res.json());
    setCity(inputCity);
    setTemp(weather.main.temp);
    setFeelsLike(weather.main.feels_like);
    setHumidity(weather.main.humidity);
    setPressure(weather.main.pressure);
  }

  return (
    <div className="App">
      <Header cityName={city} />
      <CityForm weatherMethod={currentWeather} />
      <Weather temp={temp} feelsLike={feelsLike} humidity={humidity} pressure={pressure} />
    </div>
  );
};

export default App;
