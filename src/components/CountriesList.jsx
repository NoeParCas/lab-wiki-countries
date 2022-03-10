import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div className="list-container">
      <h3>Country List</h3>
      {countries.map((country) => 
        (
          <p key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
          </p>
        )
      )}
    </div>
  );
}

export default CountriesList;

