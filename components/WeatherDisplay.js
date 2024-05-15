import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { location, current } = weatherData;
  const { temp_c, condition, wind_kph, humidity } = current;
  const sunrise = "5:14 AM"; // Placeholder
  const sunset = "7:25 PM"; // Placeholder

  return (
    <div className="weather-display">
      <h2>{location.name}</h2>
      <p className="weather-description">{condition.text}</p>
      <div className="temperature">
        <h3>{temp_c}°C</h3>
      </div>
      <WeatherIcon icon={condition.icon} />
      <div className="daily-temps">
        <div>
          <p>dawn</p>
          <WeatherIcon icon={condition.icon} />
          <p>-8°C</p>
        </div>
        <div>
          <p>morning</p>
          <WeatherIcon icon={condition.icon} />
          <p>-5°C</p>
        </div>
        <div>
          <p>afternoon</p>
          <WeatherIcon icon={condition.icon} />
          <p>-2°C</p>
        </div>
        <div>
          <p>night</p>
          <WeatherIcon icon={condition.icon} />
          <p>-7°C</p>
        </div>
      </div>
      <div className="additional-info">
        <p>wind speed: {wind_kph} kph</p>
        <p>sunrise: {sunrise}</p>
        <p>sunset: {sunset}</p>
        <p>humidity: {humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
