import React from 'react'
import Weather from './Weather'

const CountryData = ({ country }) => {
  return (
    <>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>

      <h2>languages</h2>
      <ul>
        {country.languages.map(language => 
          <li key={language.iso639_1}>{language.name}</li>
        )}
      </ul>

      <img src={country.flag} alt={`${country.name}'s Flag`} height='150px' width='150px' />
      <Weather country={country} />
    </>
  )
}

export default CountryData
