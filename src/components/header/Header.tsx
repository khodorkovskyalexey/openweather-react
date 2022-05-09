import React from 'react';

interface HeaderProps {
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
