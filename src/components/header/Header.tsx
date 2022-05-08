import React from 'react';

export interface HeaderProps {
  cityName: string;
}

const Header: React.FC<HeaderProps> = ({ cityName }) => {
  return (
    <header>
      <h2>Weather of {cityName}</h2>
    </header>
  );
};

export default Header;
