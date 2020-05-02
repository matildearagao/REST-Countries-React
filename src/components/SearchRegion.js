import React from "react";

const SearchCountry = ({ handleRegion, regionToFilter, countries }) => {
    const regions = Array.from(new Set(countries.map((country) => country.region))).slice(0,-1)
    
  return (
    <div className="searchbar__wrapper">
      <select onChange={handleRegion} value={regionToFilter}>
        <option value="" data-default >
          All Regions
        </option>
        {regions.map(
          (uniqueRegion) => (
            <option key={uniqueRegion}>{uniqueRegion}</option>
          )
        )
        }
      </select>
    </div>
  );
};

export default SearchCountry;
