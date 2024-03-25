import React from "react";
import '../App.css';

const Country = ({country, handleAddToVisited, countriesVisited}) => {
    const isVisited = countriesVisited.find(
        (visitedCountry) => visitedCountry.name.common === country.name.common
    );
    
    return(
    <>
    <p>{country.name.common}</p>
    <p>{country.flag}</p>
    {!isVisited && (
                <button onClick={() => handleAddToVisited(country)}>Add To Visited!</button>
            )}
    </>
    )
}

export default Country;