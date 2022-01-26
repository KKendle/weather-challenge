import React from 'react'

function WeatherCity(props) {
  // City Name, Pressure, Humidity, Temperature
  let [cityPressure, setCityPressure] = React.useState(null)
  let [cityHumidity, setCityHumidity] = React.useState(null)
  let [cityTemperature, setCityTemperature] = React.useState(null)

  fetch(`https://${props.apiBaseUrl}?q=${props.data.city}&${props.data.state}&units=${props.tempUnits}&appid=${props.apiKey}`)
    .then(response => response.json())
    .then(data => {
      setCityPressure(data.main.pressure)
      setCityHumidity(data.main.humidity)
      setCityTemperature(data.main.temp)
    })

  return (
    <article className="weather-city">
      <h2 className="weather-city__city-name">{props.data.city}</h2>
      <p className="weather-city__pressure">{cityPressure}</p>
      <p className="weather-city__humidity">{cityHumidity}</p>
      <p className="weather-city__temperature">{cityTemperature}</p>
    </article>
  )
}

export default WeatherCity
