import React from 'react'

const LocationWeather = ({weather, location}) => {

  return (
    <div className="location-weather">
        <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
        </div>
        <div className="weather-box">
            <div className="temperature">{Math.round(weather.main.temp)}°C</div>
            <div className="weather">
              {weather.weather[0].description[0].toUpperCase()+weather.weather[0].description.slice(1)}
            </div>
        </div>
    </div>
  )
};

export default LocationWeather;
