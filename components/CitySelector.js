import React from "react";

const CitySelector = ({ onCityChange }) => {
  const cities = [
    "Dallol,NG",
    "Fairbanks,US",
    "Londres,GB",
    "Recife,BR",
    "Vancouver,CA",
    "Yakutsk,RU",
  ];
  return (
    <select onChange={(e) => onCityChange(e.target.value)}>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city.split(",")[0]}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
