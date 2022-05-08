import React from 'react';

export interface WeatherProps {
  temp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
}

const Weather: React.FC<WeatherProps> = ({ temp, feelsLike, humidity, pressure }) => {
  return (
    <header>
      <h3>Weather tooday</h3>
      <p>Temperature: {temp}</p>
      <p>Feels like: {feelsLike}</p>
      <p>Humidity: {humidity}</p>
      <p>Pressure: {pressure}</p>
    </header>
  );
};

export default Weather;
