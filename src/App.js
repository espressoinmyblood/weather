import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import LocationWeather from './components/LocationWeather';
import Error from './components/Error';

const api = {
  key: 'bcfd3863316953c4cd560c1c310e5cea',
  base: 'https://api.openweathermap.org/data/2.5/weather'
};

const App = () => {

  const [weather, setWeather] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  

  const runApi = async (location) => {
    await fetch(`${api.base}?q=${location}&units=metric&appid=${api.key}`)
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      if (result.cod !== 200) {
        setIsError(true);
        setErrorMessage(result.message);
        return
      }
      setIsError(false)
      setWeather(result)
    })
  };

  return (
    <div className="app">
      <h1>Time to Check the Weather, Bro!</h1>
      <SearchForm 
      runApi={runApi}
      />
      {weather && !isError ? <LocationWeather weather={weather} /> : null}
      {isError ? <Error errorMessage={errorMessage} /> : null}
    </div>
  )
};

export default App;
