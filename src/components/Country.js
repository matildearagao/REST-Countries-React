import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { fetchCountry } from "../services/countries";
import CountryWeather from "./CountryWeather";

function Country({ match, mode }) {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetched = async () => {
      const res = await fetchCountry(match.params.name);
      setCountry(res[0]);
    };

    fetched();
  }, [match.params.name]);

  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  const fetchItem = async (code) => {
    const fetchItem = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${code}`
    );
    const newCountry = await fetchItem.json();
    setCountry(newCountry);
    history.push(`/country/${newCountry.name}`);
  };

  if (country) {
    const languages = country.languages
      .map((language) => language.name)
      .join(", ");
    const currencies = country.currencies
      .map((currency) => currency.name)
      .join(", ");
    return (
      <div className={`country__wrapper ${mode}`}>
        <button className="backBtn" onClick={() => goHome()}>
          <i className="fa fa-arrow-left"></i>
          <p>Back</p>
        </button>
        <div className={`country ${mode}`}>
          <div className="country__left">
            <img
              className="country__flag"
              src={country.flag}
              alt={country.name}
            />
            <CountryWeather capital={country.capital} />
          </div>
          <div className="country__right">
            <h1 className="country__name">{country.name} </h1>
            <div className="country__details">
              <div>
                <p className="country__text">
                  <span>Native Name: </span> {country.nativeName}
                </p>
                <p className="country__text">
                  <span>Population: </span> {country.population}
                </p>
                <p className="country__text">
                  <span>Region: </span> {country.region}
                </p>
                <p className="country__text">
                  <span>Sub Region: </span> {country.subregion}
                </p>
                <p className="country__text">
                  <span>Capital: </span> {country.capital}
                </p>
              </div>
              <div>
                <p className="country__text">
                  <span>Top Level Domain: </span> {country.topLevelDomain}
                </p>
                <p className="country__text">
                  <span>Currencies: </span>
                  {currencies}
                </p>
                <p className="country__text">
                  <span>Languages: </span>
                  {languages}
                </p>
              </div>
            </div>
            <div className="country__borders">
              <p className="country__text">
                <span>Border Countries: </span>
              </p>
              <ul>
                {country.borders.length > 0 ? (
                  country.borders.map((border) => (
                    <li key={border}>
                      <button
                        onClick={() => {
                          fetchItem(border);
                        }}
                      >
                        {border}
                      </button>
                    </li>
                  ))
                ) : (
                  <p>no borders</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default Country;
