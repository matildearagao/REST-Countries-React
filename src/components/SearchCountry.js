import React from 'react';

const SearchCountry = ({countryToFilter, handleFilter}) => {
    return (
        <div className="searchbar">
            <input value={countryToFilter} onChange={handleFilter} placeholder="Search Country"/>
        </div>
    );
};

export default SearchCountry;