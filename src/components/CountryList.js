import React from "react";
import Country from "./Country";

const CountryList = ({countriesToVisit}) => {
    const countryComponents = countriesToVisit.map((country, id) => {
        return <Country
            country={country}
            key={id}
        />
})

return (
  <>
  <h1><u>Countries That Haven't Been Visited</u></h1>
            {countryComponents}
  </>
)
}

export default CountryList;