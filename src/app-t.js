import React, { useState, useEffect } from "react";
import {fetchCountries} from './services/countries'

import Countries from "./components/Countries";
import SearchCountry from "./components/SearchCountry";
import Navbar from "./components/Navbar";

function App() {
  const [countryToFilter, setCountryToFilter] = useState("");
  const [countries, setCountries] = useState([]);
    
  useEffect(() => {
    const fetched = async () => {
      const res = await fetchCountries()
      setCountries(res);
    }
    fetched()
      },[ ]);

  const handleFilter = (e) => {
    setCountryToFilter(e.target.value);
  };

  const changeCountryFiltered = (filter) => {
    setCountryToFilter(filter);
  };

  const countriesFiltered = countryToFilter
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(countryToFilter.toLowerCase())
      )
    : countries;

  

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <SearchCountry
          countryToFilter={countryToFilter}
          handleFilter={handleFilter}
          countries={countriesFiltered}
        />
        <Countries
          countries={countriesFiltered}
          changeCountryFiltered={changeCountryFiltered}
        />
      </div>
    </>
  );
}

export default App;
