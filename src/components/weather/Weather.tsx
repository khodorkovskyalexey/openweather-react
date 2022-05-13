import React from 'react';
import { getDateInCustomFormat } from '../../utils';
import './weather.css';

interface WeatherProps {
  temp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
}

const Weather: React.FC<WeatherProps> = ({ temp, feelsLike, humidity, pressure }) => {
  return (
    <div>
      <div className="weather-card">
        <h3>{getDateInCustomFormat(new Date())}</h3>
        <p>Temperature: {temp}°C</p>
        <p>Feels like: {feelsLike}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure} hPa</p>
      </div>
    </div>
  );
};

export default Weather;
