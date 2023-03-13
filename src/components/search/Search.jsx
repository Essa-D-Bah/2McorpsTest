import React, { useEffect, useState } from "react";
import "./search.css";

export default function Search({ data }) {
  const [countryName, setCountryName] = useState("");
  const [foundCountry, setFoundCountry] = useState("");
  const [continent, setContinent] = useState("Africa");
  const [allCounInRegion, setAllCounInRegion] = useState([]);
  const [toogle, setToggle] = useState(false);

  useEffect(() => {
    const all = data.filter((coun) => coun.region === continent);
    setAllCounInRegion(all);
  }, [data, continent]);

  const handleSearch = (e) => {
    e.preventDefault();
    const country = allCounInRegion.find(
      (country) => country.name.common === countryName
    );
    setFoundCountry(country);

    console.log("county", foundCountry);
  };

  const handleChangeContinent = (e) => {
    e.preventDefault();
    let { value } = e.target;
    setContinent(value);
  };

  return (
    <div className="searchCon">
      <div className="searchInner">
        <div className="inputCont">
          <input
            type="text"
            placeholder="Search"
            className="input border-2 border-blue-200"
            onChange={(e) => setCountryName(e.target.value)}
          />

          <button className="searchBtn" onClick={(e) => handleSearch(e)}>
            Search
          </button>
        </div>
        <div className="selectCont">
          <label htmlFor="continents">Select Continent to Search country</label>
          <select
            name="continents"
            id="continent"
            className="select"
            onChange={(e) => handleChangeContinent(e)}
          >
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div>
        {foundCountry && (
          <div style={{ textAlign: "center", margin: "2em" }}>
            <p style={{padding:'1em', border:'solid 1px black', borderRadius:'10px', cursor:"pointer"}} onClick={() => setToggle((prev) => !prev)}>
              {foundCountry.name.official}
            </p>
            {toogle && (
              <div>
                <p>Common Name: {foundCountry.name.common}</p>
                <p>Capital City:{foundCountry.capital}</p>
                <p>Land Area: {foundCountry.area}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
