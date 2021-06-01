import React from 'react'
import CountryData from './CountryData';

const Countries = ({ countries, filterBy, showCountryBy }) => {
  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(filterBy.toLowerCase())
  })

  if (filterBy === '') return null

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  if (filteredCountries.length === 0) {
    return <p>No match in the database, specify another filter</p>
  }

  return filteredCountries.length === 1 
    ? <CountryData country={filteredCountries[0]} />
    : (
      <div>
        {filteredCountries.map(country => (
          <div key={country.alpha2Code}>
            {country.name} <button onClick={() => showCountryBy(country.name)}>show</button>
          </div>
        ))}
      </div>)
}

export default Countries