import axios from "axios";

const allCountriesRequestUrl = "https://restcountries.eu/rest/v2/all";

const fetchCountries = () => {
  const req = axios.get(allCountriesRequestUrl);
  return req.then(res => res.data);
};
const fetchCountry = (country) => {
  const req = axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
  return req.then(res => res.data);
};


export {fetchCountries, fetchCountry};