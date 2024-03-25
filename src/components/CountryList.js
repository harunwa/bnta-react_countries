import React from "react";
import Country from "./Country";

const CountryList = ({countries, title, handleAddToVisited}) => {
    const countryComponents = countries.map((country, id) => {
        return <Country
            country={country}
            key={id}
            handleAddToVisited={handleAddToVisited}
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