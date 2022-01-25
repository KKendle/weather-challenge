import React from 'react'

function WeatherCity(props) {
  return (
    <article className="weather-city">
      <h2 className="weather-city__city-name">${props.cityName}</h2>
      <p className="weather-city__pressure">${props.pressure}</p>
      <p className="weather-city__humidity">${props.humidity}</p>
      <p className="weather-city__temperature">${props.temperature}</p>
    </article>
  )
}

export default WeatherCity
