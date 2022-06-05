import React from 'react';
import '../Country/Country.css';

const Country = (props) => {
    console.log(props.country);
    const { name, capital, population, area, flags } = props.country;
    return (
        <div className='country'>
            <img title='Click to see description' src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
            <p>Area: {area}</p>
            <p><small>Population: {population}</small></p>
        </div>
    );
};

export default Country;