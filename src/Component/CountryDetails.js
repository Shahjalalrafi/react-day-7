import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const design = {
    border: "1px solid black",
    width: "400px",
    margin: '3px auto',
    padding: '10px'
}

const CountryDetails = () => {
    const {countryName} = useParams()
    const [country, setCountry] = useState([]) 

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    })
    return (
        <div style={design}>
            <h4>Every country details</h4>
            <h1>Name: {country.name}</h1>
            <h2>population: {country.population}</h2>
            <h3>Area: {country.area}</h3>
            <hr/>
            <img style={{width: "100%"}} src={country.flag} alt=""></img>
        </div>
    );
};

export default CountryDetails;