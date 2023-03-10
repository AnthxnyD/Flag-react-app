import "./App.css";

import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountyInfo from "./components/CountryInfo/CountryInfo";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path='/' exact element={<AllCountries />} />
          <Route path='/country/:countryName' element={<CountyInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;