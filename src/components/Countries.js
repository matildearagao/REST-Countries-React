import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {fetchCountries} from '../services/countries'
import CountriesList from "./CountriesList";
import Search from "./Search";


function Countries({mode}) {
  const [countries, setCountries] = useState([]);
  const [countryToFilter, setCountryToFilter] = useState('');
  const [regionToFilter, setRegionToFilter] = useState('');
    
  useEffect(() => {
    const fetched = async () => {
      const res = await fetchCountries()
      setCountries(res);
    }
    fetched()
      },[]);

  const handleFilter = (e) => {
    setCountryToFilter(e.target.value);
  };

  const handleRegion =(e)=>{
    setRegionToFilter(e.target.value)
  }

  const history = useHistory();
  const changeCountry = (country) => {
    history.push(`/country/${country}`);
  }
 

  const countriesFiltered = countryToFilter
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(countryToFilter.toLowerCase()) &&
        country.region.toLowerCase().includes(regionToFilter.toLowerCase())
      )
    : regionToFilter 
    ? countries.filter((country) => country.region.toLowerCase().includes(regionToFilter.toLowerCase()) )
    : countries;


    return (
      <>
      <Search handleFilter={handleFilter} countriesFiltered={countriesFiltered} countries={countries} handleRegion={handleRegion} regionToFilter={regionToFilter}  mode={mode ? '' : 'light'}/>
      <CountriesList  countries={countriesFiltered} changeCountry={changeCountry} mode={mode ? '' : 'light'}/>
      </>
    );
}

export default Countries;
