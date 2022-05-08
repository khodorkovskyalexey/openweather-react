import React from 'react';

export interface CityFormProps {
  weatherMethod: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
}

const CityForm: React.FC<CityFormProps> = ({ weatherMethod }) => {
  return (
    <form onSubmit={weatherMethod}>
      <input type="text" name="city" placeholder="City" />
      <button>Get weather</button>
    </form>
  );
};

export default CityForm;
