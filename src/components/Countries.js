import React from "react";
import CountryWeather from "./CountryWeather";


function Countries({ countries, changeCountryFiltered, borders }) {

  if (countries.length > 10) {
    return (
      <div className="countries__noresult">
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <ul className="countries__wrapper">
        {countries.map((country, i) => (
          <li
            key={i}
            className="country"
            onClick={() => changeCountryFiltered(country.name)}
          >
            <img
              src={country.flag}
              alt={country.name}
              className="country__flag"
            />
            <div className="country__details">
              <p className="country__name">{country.name} </p>
              <p className="country__text">
                <span>Population: </span> {country.population}
              </p>
              <p className="country__text">
                <span>Region: </span> {country.region}
              </p>
              <p className="country__text">
                <span>Capital: </span> {country.capital}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  } else if (countries.length === 1) {

    
    const languages = countries[0].languages.map(language => language.name ).join(', ')
    const currencies = countries[0].currencies.map(currency => currency.name ).join(', ')
    const bordersFetched = borders.map(border => border).join(', ') || ''

    return (
      <div className="country__single">
        <div className="country__left">
          <img src={countries[0].flag} alt={countries[0].name} width="150px" />
          <CountryWeather capital={countries[0].capital} />
        </div>
        <div className="country__details">
          <h1 className="country__name">{countries[0].name} </h1>
          <p className="country__text">
            <span>Native Name: </span> {countries[0].nativeName}
          </p>
          <p className="country__text">
            <span>Population: </span> {countries[0].population}
          </p>
          <p className="country__text">
            <span>Region: </span> {countries[0].region}
          </p>
          <p className="country__text">
            <span>Sub Region: </span> {countries[0].subregion}
          </p>
          <p className="country__text">
            <span>Capital: </span> {countries[0].capital}
          </p>
          <p className="country__text">
            <span>Top Level Domain: </span> {countries[0].topLevelDomain}
          </p>
          <p className="country__text">
            <span>Currencies: </span>
             {currencies}
          </p>
          <p className="country__text">
            <span>Languages: </span>
             {languages}
          </p>
          <p className="country__text">
            <span>Border Countries: </span>
             {bordersFetched}
          </p>
        </div> 
      </div>
    );
  } else return null;
}

export default Countries;
