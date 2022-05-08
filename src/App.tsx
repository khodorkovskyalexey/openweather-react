import React from 'react';

import './App.css';
import { CityForm, Header, Weather } from './components';

class App extends React.Component {
  currentWeather = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = e.target.city.value;
    const openweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}&units=metrix`;
    const weather = await fetch(openweatherUrl).then((res) => res.json());
    console.log(weather);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CityForm weatherMethod={this.currentWeather} />
        <Weather />p
      </div>
    );
  }
}

export default App;
