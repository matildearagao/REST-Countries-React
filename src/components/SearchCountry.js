import React from "react";

const SearchCountry = ({ countryToFilter, handleFilter }) => {
  return (
      <div className="searchbar__wrapper">
        <i className="fa fa-search"></i>
        <input
          value={countryToFilter}
          onChange={handleFilter}
          placeholder="Search for a country..."
        />
      </div>
  );
};

export default SearchCountry;
