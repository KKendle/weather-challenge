import './App.css';
import WeatherCity from './components/WeatherCity';
import weatherData from './weatherData'

function App() {
  const apiKey = "d596f250cbded496840a7f64fe11522c"
  const apiBaseUrl = 'api.openweathermap.org/data/2.5/weather'
  const tempUnits = 'imperial'
  const cityWeather = weatherData.map((data) => {
    return (
      <WeatherCity
        key={data.id}
        apiKey={apiKey}
        apiBaseUrl={apiBaseUrl}
        tempUnits={tempUnits}
        data={data} />
    )
  })

  return (
    <div className="App">
      <h1>hello weather</h1>
      {cityWeather}
    </div>
  );
}

export default App;
