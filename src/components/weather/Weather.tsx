import React from 'react';
import './weather.css';

interface WeatherProps {
  date: Date;
  temp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
}

function getViewDate(date: Date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = date.getDate();
  const month = date.getMonth();
  return `${day} ${monthNames[month]}`;
}

const Weather: React.FC<WeatherProps> = ({ date, temp, feelsLike, humidity, pressure }) => {
  return (
    <div>
      <div className="weather-card">
        <h3>{getViewDate(date)}</h3>
        <p>Temperature: {temp}°C</p>
        <p>Feels like: {feelsLike}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure} hPa</p>
      </div>
    </div>
  );
};

export default Weather;
