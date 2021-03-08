import React, { useEffect, useState } from 'react';
import Country from './Country';

const Header = () => {
    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Total: {countries.length}</h1>
            {
                countries.map(country => <Country countryDetails= {country}></Country>)
            }
        </div>
    );
};

export default Header;