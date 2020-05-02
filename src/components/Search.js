import React from "react";
import SearchCountry from "./SearchCountry";
import SearchRegion from "./SearchRegion";

const Search = ({
  handleFilter,
  handleRegion,
  countriesFiltered,
  regionToFilter,
  countries,
  mode,
}) => {
  return (
    <div className={`searchbar ${mode}`}>
      <SearchCountry
        handleFilter={handleFilter}
        countriesFiltered={countriesFiltered}
        countries={countries}
        mode={mode ? "" : "light"}
      />
      <SearchRegion
        handleRegion={handleRegion}
        regionToFilter={regionToFilter}
        countries={countries}
        mode={mode ? "" : "light"}
      />
    </div>
  );
};

export default Search;
