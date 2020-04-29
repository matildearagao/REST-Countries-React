import React, { useState, useEffect } from "react";
import axios from "axios";

import Countries from "./components/Countries";
import SearchCountry from "./components/SearchCountry";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryToFilter, setCountryToFilter] = useState("");
  const [borders, setBorders] = useState([]);
  const [bordersInput, setBordersInput] = useState([]);

  
  

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
      },[ ]);

  const handleFilter = (e) => {
    setCountryToFilter(e.target.value);

    if (countriesFiltered.length === 1) {
      setBordersInput(countriesFiltered[0].borders);
      handleBorders();
    } else setBordersInput([]); setBorders([])
  };

  const changeCountryFiltered = (filter) => {
    setCountryToFilter(filter);
  };

  const countriesFiltered = countryToFilter
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(countryToFilter.toLowerCase())
      )
    : countries;

  const handleBorders = () => {
    bordersInput.forEach((code) => {
      axios
        .get(`https://restcountries.eu/rest/v2/alpha?codes=${code}`)
        .then((response) => {
          response.data.forEach((country) => {
            borders.push(country.name);
            const bordersNew = Array.from(new Set(borders));
            setBorders(bordersNew);
          });
        });
    });
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <SearchCountry
          countryToFilter={countryToFilter}
          handleFilter={handleFilter}
        />
        <Countries
          countries={countriesFiltered}
          changeCountryFiltered={changeCountryFiltered}
          borders={borders}
        />
      </div>
    </>
  );
}

export default App;
