import { useState, useEffect } from 'react';
import Country from './country';

export default function Countries() {

  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => { setCountries(data) })
  }, [])

  function handleVisitedCountry(country) {
    console.log('I am visitingggggg', country.name.common);
    setVisitedCountries([...visitedCountries, country]);
  }

  return (
    <div >
      <h3>Countries: {countries.length}</h3>
      <h3>Countries Visited: {visitedCountries.length}</h3>
      {/* {visitedCountries.length > 0 && (
        <h3>Countries name: {visitedCountries[0].name.common}</h3>
      )}       Displays the first name of the visited country */}

      
        {visitedCountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      
      <div className='align'>
        {
          countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} ></Country>)
        }
      </div>
    </div>
  )
}

