import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState({})

  // https://darksky.net/dev/docs
  useEffect(() => {
    const [lat, lng] = country.latlng
    const apiKey = process.env.REACT_APP_API_KEY
    const proxy = process.env.REACT_APP_PROXY
    const url = `${proxy}https://api.darksky.net/forecast/${apiKey}/${lat},${lng}?units=si`

    axios
      .get(url)
      .then(response => {
        setWeatherData(response.data.currently)
      })
  }, [country])

  const isEmpty = () => 
    Object.keys(weatherData).length === 0

  return (
    <div>
      <h2>Weather in {country.capital}</h2>

      {isEmpty() 
        ? <p>Loading...</p>
        : (
          <>
            <p><b>temperature:</b> {weatherData.temperature}℃</p>
            <p><b>wind:</b> {weatherData.windSpeed} mph</p>
          </>
        )
      }
    </div>
  )
}

export default Weather
