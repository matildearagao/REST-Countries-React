import React, { useState } from "react";


function CountriesList({changeCountry, countries, mode}) {

  const [visible, setVisible] = useState(8)

  const loadMore = () =>{
    setVisible(visible+8)
}

    return (
      <div className={`countries__wrapper ${mode}`}>
      <ul className={`countries ${mode}`}>
        {countries.slice(0, visible).map((country, i) => (
          <li
            key={i}
            className="countries__card"
            onClick={() => changeCountry(country.name)}
          >
            <img
              src={country.flag}
              alt={country.name}
              className="countries__flag"
            />
            <div className="countries__details">
              <h2 className="countries__name">{country.name} </h2>
              <p >
                <span>Population: </span> {country.population}
              </p>
              <p>
                <span>Region: </span> {country.region}
              </p>
              <p>
                <span>Capital: </span> {country.capital}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {countries.length > visible ?
      <button onClick={()=>loadMore()} > load More</button>
    : null}
      </div>
    );
}

export default CountriesList;
