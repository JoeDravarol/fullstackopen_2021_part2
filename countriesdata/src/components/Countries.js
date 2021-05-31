import React from 'react'
import CountryData from './CountryData';

const Countries = ({ countries, filterBy }) => {
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

  if (filteredCountries.length === 1) {
    return <CountryData country={filteredCountries[0]} />
  }

  return (
    <div>
      {filteredCountries.map(country =>
        <p key={country.alpha2Code}>{country.name}</p>
      )}
    </div>
  )
}

export default Countries