import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function WeatherCity(props) {
  const rows: GridRowsProp = props.weatherData
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'City Name', width: 150 },
    { field: 'col2', headerName: 'Pressure', width: 150 },
    { field: 'col3', headerName: 'Humidity', width: 150 },
    { field: 'col4', headerName: 'Temperature', width: 150 },
  ]

  return (
    <article className="weather-city">
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </article>
  )
}

export default WeatherCity
