import React from 'react';
import { Weather } from '../../types';
import { getDateInCustomFormat } from '../../utils';
import './weather-card.css';

interface WeatherCardProps {
  weather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const { temp, feelsLike, humidity, pressure } = weather;

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
