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
    <div>
      <select onChange={(e) => onCityChange(e.target.value)}>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city.split(",")[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
