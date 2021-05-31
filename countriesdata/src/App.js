import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterBy, setFilterBy] = useState('')

  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all';
    axios
      .get(url)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value)
  }

  return (
    <div>
      <Filter
        value={filterBy}
        handleOnChange={handleFilterChange}
      />
      <Countries
        countries={countries}
        filterBy={filterBy}
      />
    </div>
  )
}

export default App
