import { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {
    const [countriesToVisit, setCountriesToVisit] = useState([]);
    useEffect(() => {
        const loadCountryData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json();
            setCountriesToVisit(data);
        }
        loadCountryData();

    }, []);
    
    return (
        <>
        <CountryList countriesToVisit={countriesToVisit}/>
        </>
    )
    
}

export default CountryContainer;