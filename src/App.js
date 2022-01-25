import './App.css';

function App() {
  const apiKey = "d596f250cbded496840a7f64fe11522c"
  const apiBaseUrl = 'api.openweathermap.org/data/2.5/weather'
  const tempUnits = 'imperial'
  const city1 = 'Saint Louis'
  const state1 = 'MO'
  const city2 = 'Eldon'
  const state2 = 'MO'
  const city3 = 'Harbor Springs'
  const state3 = 'MI'
  const city4 = 'Gatlinburg'
  const state4 = 'TN'
  const city5 = 'New York'
  const state5 = 'NY'
  const city6 = 'Chesterfield'
  const state6 = 'MO'
  const city7 = 'Chicago'
  const state7 = 'IL'
  const city8 = 'Springfield'
  const state8 = 'MO'
  const city9 = 'Springfield'
  const state9 = 'IL'
  const city10 = 'Phoenix'
  const state10 = 'AZ'
  const city11 = 'Seattle'
  const state11 = 'WA'
  const city12 = 'Dayton'
  const state12 = 'OH'
  const city13 = 'Colorado'
  const state13 = 'CO'
  const city14 = 'Milwaukee'
  const state14 = 'WI'
  const city15 = 'Atterberry'
  const state15 = 'IL'
  const city16 = 'Saint Charles'
  const state16 = 'MO'
  const city17 = 'Maryland Heights'
  const state17 = 'MO'
  const city18 = 'Columbia'
  const state18 = 'MO'
  const city19 = 'Kansas City'
  const state19 = 'MO'
  const city20 = 'Grand Rapids'
  const state20 = 'MI'

  function displayWeather(data) {
    // City Name, Pressure, Humidity, Temperature
    const bodyEl = document.querySelector('body')

    bodyEl.innerHTML += `<h2>${data.cityName}</h2>`
    bodyEl.innerHTML += `<p>${data.pressure}</p>`
    bodyEl.innerHTML += `<p>${data.humidity}</p>`
    bodyEl.innerHTML += `<p>${data.temperature}</p>`
    bodyEl.innerHTML += `<hr>`
  }

  // location 1
  fetch(`https://${apiBaseUrl}?q=${city1}&${state1}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 2
  fetch(`https://${apiBaseUrl}?q=${city2}&${state2}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 3
  fetch(`https://${apiBaseUrl}?q=${city3}&${state3}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 4
  fetch(`https://${apiBaseUrl}?q=${city4}&${state4}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 5
  fetch(`https://${apiBaseUrl}?q=${city5}&${state5}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 6
  fetch(`https://${apiBaseUrl}?q=${city6}&${state6}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 7
  fetch(`https://${apiBaseUrl}?q=${city7}&${state7}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 8
  fetch(`https://${apiBaseUrl}?q=${city8}&${state8}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 9
  fetch(`https://${apiBaseUrl}?q=${city9}&${state9}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 10
  fetch(`https://${apiBaseUrl}?q=${city10}&${state10}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 11
  fetch(`https://${apiBaseUrl}?q=${city11}&${state11}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 12
  fetch(`https://${apiBaseUrl}?q=${city12}&${state12}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 13
  fetch(`https://${apiBaseUrl}?q=${city13}&${state13}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 14
  fetch(`https://${apiBaseUrl}?q=${city14}&${state14}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 15
  fetch(`https://${apiBaseUrl}?q=${city15}&${state15}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 16
  fetch(`https://${apiBaseUrl}?q=${city16}&${state16}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 17
  fetch(`https://${apiBaseUrl}?q=${city17}&${state17}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 18
  fetch(`https://${apiBaseUrl}?q=${city18}&${state18}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 19
  fetch(`https://${apiBaseUrl}?q=${city19}&${state19}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  // location 20
  fetch(`https://${apiBaseUrl}?q=${city20}&${state20}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        cityName: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temperature: data.main.temp
      }

      displayWeather(weatherData)
    })

  return (
    <div className="App">
      <h1>hello weather</h1>
    </div>
  );
}

export default App;
