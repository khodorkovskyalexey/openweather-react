import React from 'react';
import { getDateInCustomFormat } from '../../utils';
import './weather-card.css';

interface WeatherCardProps {
  temp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temp, feelsLike, humidity, pressure }) => {
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

export default WeatherCard;
