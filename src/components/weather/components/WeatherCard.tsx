import React from 'react';
import { Weather } from '../../../types';
import { getDateInCustomFormat } from '../../../utils';
import './weather-card.css';

interface WeatherCardProps {
  date?: Date;
  weather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ date, weather }) => {
  const { temp, feelsLike, humidity, pressure } = weather;

  return (
    <div className="weather-card">
      <h3>{getDateInCustomFormat(date ?? new Date())}</h3>
      <p>Temperature: {temp}°C</p>
      <p>Feels like: {feelsLike}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Pressure: {pressure} hPa</p>
    </div>
  );
};

export default WeatherCard;
