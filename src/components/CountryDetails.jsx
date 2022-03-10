import React from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
  // console.log(props);

  const { alpha3Code } = useParams();
  console.log(alpha3Code);
  // const { countries } = props;

  // const country = countries.filter((eachCountry) => {
  //   return eachCountry.alpha3Code === alpha3Code;
  // })[0];

  const [country, setCountry ] = useState();

  useEffect(() => {
    const getCountry = async () => {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
      );
      setCountry(response.data);
    };
    getCountry();
  },[alpha3Code]);
 
  if (!country){
    return null
  } 

  const{ name, capital, area, borders } = country

  return (
    <div className="col-7">
      <h1>{name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>{borders}</td>
          <td>
            <ul>
            {borders.map((eachBorder, index) =>{
              console.log(eachBorder)
              return(
                <div key={eachBorder.alpha3Code}>
                  <Link to={`/${eachBorder}`}>{eachBorder}</Link>
                </div>
              )
            })}
              {/* <li><a href="/AND">Andorra</a></li>
              <li><a href="/BEL">Belgium</a></li>
              <li><a href="/DEU">Germany</a></li>
              <li><a href="/ITA">Italy</a></li>
              <li><a href="/LUX">Luxembourg</a></li>
              <li><a href="/MCO">Monaco</a></li>
              <li><a href="/ESP">Spain</a></li>
              <li><a href="/CHE">Switzerland</a></li> */}
            </ul>
          </td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
