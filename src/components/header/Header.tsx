import React from 'react';
import './header.css';

interface HeaderProps {
  cityName: string;
  updateWeather: () => Promise<void>;
}

const Header: React.FC<HeaderProps> = ({ cityName, updateWeather }) => {
  return (
    <header>
      <h2>Weather of {cityName}</h2>
      <button onClick={() => updateWeather()}>Update</button>
    </header>
  );
};

export default Header;
