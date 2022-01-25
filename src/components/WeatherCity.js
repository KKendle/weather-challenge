import React from 'react'

function WeatherCity(props) {
  // location
  // fetch(`https://${props.apiBaseUrl}?q=${props.data.city}&${props.data.state}&units=${props.tempUnits}&appid=${props.apiKey}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })

  return (
    <article className="weather-city">
      <h2 className="weather-city__city-name">{props.data.city}</h2>
      <p className="weather-city__pressure">{props.data.pressure}</p>
      <p className="weather-city__humidity">{props.data.humidity}</p>
      <p className="weather-city__temperature">{props.data.temperature}</p>
    </article>
  )
}

export default WeatherCity
