import './App.css';

function App() {
  const apiKey = "d596f250cbded496840a7f64fe11522c"
  const apiBaseUrl = 'api.openweathermap.org/data/2.5/weather'
  const tempUnits = 'imperial'
  const city = 'Saint Louis'
  const state = 'MO'

  fetch(`https://${apiBaseUrl}?q=${city}&${state}&units=${tempUnits}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })

  return (
    <div className="App">
      <h1>hello weather</h1>
    </div>
  );
}

export default App;
