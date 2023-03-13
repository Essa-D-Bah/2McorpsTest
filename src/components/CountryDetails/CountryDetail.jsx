import React from "react";

export default function CountryDetail({ foundCountry }) {
  return (
    <div>
      <p>{foundCountry.name.common}</p>
      <p>{foundCountry.capital}</p>
    </div>
  );
}
