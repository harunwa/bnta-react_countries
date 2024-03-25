import { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {
    const [countriesToVisit, setCountriesToVisit] = useState([]);
    const [countriesVisited, setCountriesVisited] = useState([]);

    useEffect(() => {
        const loadCountryData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json();
            setCountriesToVisit(data);
        }
        loadCountryData();

    }, []);
    
    const handleAddToVisited = (countryToAdd) => {
        const updatedCountriesToVisit = countriesToVisit.filter((countryToKeep) => {
            return countryToKeep !== countryToAdd
        });

        const updatedCountriesVisited = [...countriesVisited];
        updatedCountriesVisited.push(countryToAdd);
        setCountriesToVisit(updatedCountriesToVisit);
        setCountriesVisited(updatedCountriesVisited);
    };

    return (
        <>
        <CountryList
            countries={countriesToVisit}
            handleAddToVisited={handleAddToVisited}
            title="Countries To Visit"
            />
         <CountryList
            countries={countriesVisited}
            title="Countries Visited Already"
        />
     </>

    )
}

export default CountryContainer;