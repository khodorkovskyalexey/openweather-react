import React, { useState } from 'react';

interface CityFormProps {
  city: string;
  setCity: (city: string) => void;
}

const CityForm: React.FC<CityFormProps> = ({ city, setCity }) => {
  const [inputCity, setInputCity] = useState(city);

  const setCityOrFail = () => {
    if (!inputCity.trim().length) {
      throw new Error('City name is required');
    }
    setCity(inputCity);
  };

  return (
    <form>
      <input value={inputCity} onChange={(event) => setInputCity(event.target.value)} placeholder="City" />
      <button type="button" onClick={setCityOrFail}>
        Get weather
      </button>
    </form>
  );
};

export default CityForm;
