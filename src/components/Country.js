import React from "react";

const Country = ({country, handleAddToVisited}) => {
    return(
    <>
    <p>{country.name.common}</p>
    <p>{country.name.common}</p>
            <p>{country.flag}</p>
            <button 
            onClick={() => handleAddToVisited(country)}>Add To Visited!</button>
    </>
    )
}

export default Country;