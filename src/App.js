import './App.css';
import WeatherCity from './components/WeatherCity';
import weatherData from './weatherData'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

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
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World', col3: '3', col4: '4' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: '3', col4: '4' },
    { id: 3, col1: 'MUI', col2: 'is Amazing', col3: '3', col4: '4' },
  ];
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'City Name', width: 150 },
    { field: 'col2', headerName: 'Pressure', width: 150 },
    { field: 'col3', headerName: 'Humidity', width: 150 },
    { field: 'col4', headerName: 'Temperature', width: 150 },
  ];

  return (
    <div className="App">
      <h1>hello weather</h1>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      {cityWeather}
    </div>
  );
}

export default App;
