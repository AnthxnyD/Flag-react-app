import React, { useState, useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { apiURL } from "../../util/api";



const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();
  console.log(countryName);

  // const borders = country.map((country) => country.borders);

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();
        console.log(data);
        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  const navigate = useNavigate();

  return (
    <>
      <div>Hello</div>
      <div className="country__info__wrapper">
        
          <button onClick={() => navigate(-1)}>Back</button>
        

        {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {country?.map((country, index) => (
          <div className="country__info__container" key={index}>
            <div className="country__info-img">
              <img src={country.flags.png} alt="" />
            </div>

            <div className="country__info">
              <h3>{country.name.common}</h3>

              <div className="country__info-left">
                <h5>
                  Population:{" "}
                  <span>
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </h5>
                <h5>
                  Region: <span>{country.region}</span>
                </h5>
                <h5>
                  Sub Region: <span>{country.subregion}</span>
                </h5>
                <h5>
                  Capital: <span>{country.capital}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryInfo;