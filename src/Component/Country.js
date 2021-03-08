import React from 'react';
import { Link } from 'react-router-dom';

const design = {
    border: "1px solid black",
    width: "400px",
    margin: '3px auto',
    padding: '10px'
}
const Country = ({countryDetails}) => {
    const handleClick = (country) => {
        console.log("clicked", country)
    }
    return (
        <div style={design}>
            <h1>Name: {countryDetails.name}</h1>
            <Link to={`/country/${countryDetails.name}`}><button onClick={handleClick}>show details</button></Link>
        </div>
    );
};

export default Country;