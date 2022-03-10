import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

import CountryDetails from './components/CountryDetails';
// import countries from './countries.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    };
    getCountries();
  }, []);

  return countries ? (
    <div className="App">
      <Navbar />

      <div id="countries-page" className="routes-container">
      
          <CountriesList countries={countries} />
 
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>

        <div className="countries-container"></div>
      </div>
    </div>
  ) : null;
}

export default App;
