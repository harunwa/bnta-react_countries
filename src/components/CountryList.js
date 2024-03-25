import React from "react";
import Country from "./Country";
import '../App.css';

const CountryList = ({countries, title, handleAddToVisited, countriesVisited}) => {
    const countryComponents = countries.map((country, id) => {
        return <Country
            country={country}
            key={id}
            handleAddToVisited={handleAddToVisited}
            countriesVisited={countriesVisited}
        />
})

return (
  <>
  <h1><u>{title}</u></h1>
            {countryComponents}
  </>
)
}

export default CountryList;