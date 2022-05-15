import React, { ReactNode } from 'react';

interface WeatherGroupProps {
  children: ReactNode;
}

const WeatherGroup: React.FC<WeatherGroupProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default WeatherGroup;
