import React from 'react';

import './App.css';
import { CityForm, Header, Weather } from './components';
import { WeatherType } from './types';

class App extends React.Component {
  state = {
    city: 'Omsk',
    currentWeather: {
      temp: 0,
      feelsLike: 0,
      humidity: 0,
      pressure: 0,
    } as WeatherType,
  };

  componentDidMount() {
    const fetchData = async () => {
      this.getCurrentWeather();
    };
    fetchData();
  }

  getCurrentWeather = async (inputCity?: string) => {
    const actualCity = inputCity ?? this.state.city;
    const openweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${actualCity}&appid=${process.env.REACT_APP_OPENWEAHER_API_KEY}&units=metric`;
    const weather = await fetch(openweatherUrl).then((res) => res.json());
    if (weather.cod === '404') {
      throw new Error('Invalid city name');
    }
    this.setState({
      currentWeather: {
        temp: weather.main.temp,
        feelsLike: weather.main.feels_like,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure,
      },
    });
  };

  updateWeather = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let inputCity = e.target.city.value;
    if (!inputCity.trim().length) {
      inputCity = this.state.city;
    }
    await this.getCurrentWeather(inputCity);
    this.setState({ city: inputCity });
  };

  render() {
    return (
      <div className="App">
        <Header cityName={this.state.city} />
        <CityForm weatherMethod={this.updateWeather} />
        <Weather
          date={new Date()}
          temp={this.state.currentWeather.temp}
          feelsLike={this.state.currentWeather.feelsLike}
          humidity={this.state.currentWeather.humidity}
          pressure={this.state.currentWeather.pressure}
        />
      </div>
    );
  }
}

export default App;
