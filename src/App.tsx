import React from 'react';
import './App.css';
import { CityForm, Header, Weather } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <CityForm />
      <Weather />
    </div>
  );
}

export default App;
