import './App.css';
import React from 'react'
import WeatherCity from './components/WeatherCity';
import weatherData from './weatherData'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function App() {
  const apiKey = "d596f250cbded496840a7f64fe11522c"
  const apiBaseUrl = 'api.openweathermap.org/data/2.5/weather'
  const tempUnits = 'imperial'
  // City Name, Pressure, Humidity, Temperature
  // const [cityPressure, setCityPressure] = React.useState(null)
  // const [cityHumidity, setCityHumidity] = React.useState(null)
  // const [cityTemperature, setCityTemperature] = React.useState(null)
  // const cityWeatherData = []

  // const cityWeather = weatherData.map((data) => {
  //   fetch(`https://${apiBaseUrl}?q=${data.city}&${data.state}&units=${tempUnits}&appid=${apiKey}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     // setCityPressure(data.main.pressure)
  //     // setCityHumidity(data.main.humidity)
  //     // setCityTemperature(data.main.temp)
  //     cityWeatherData.push(
  //       {
  //         id: data.id,
  //         col1: data.city,
  //         col2: data.pressure,
  //         col3: data.humidity,
  //         col4: data.temp
  //       }
  //     )
  //   })
  // })


  // {cityWeather}
  return (
    <div className="App">
      <h1>hello weather</h1>
    </div>
  );
  // <WeatherCity weatherData={cityWeatherData} />
}

export default App;
