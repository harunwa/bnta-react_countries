import React, { useState } from "react";

const Country = ({ country, handleAddToVisited, countriesVisited }) => {
    const [showDetails, setShowDetails] = useState(false);

    const isVisited = countriesVisited.find(
        (visitedCountry) => visitedCountry.name.common === country.name.common
    );

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
                <p>{country.name.common}</p>
                <img src={country.flags.png}/>
                {!isVisited && (
                    <button onClick={() => handleAddToVisited(country)}>Add To Visited!</button>
                )}
            {showDetails && (
                <div>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <p>Languages: {Object.values(country.languages).join(", ")}</p>
                </div>
            )}
            <button onClick={toggleDetails}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
        </>
    );
};

export default Country;
