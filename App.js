import React, { useState, useEffect } from 'react';
import CitySelector from './components/CitySelector';
import WeatherDisplay from './components/WeatherDisplay';
import getWeather from './services/weatherApi';
import './styles/main.scss';

const App = () => {
  const [city, setCity] = useState("Dallol,NG");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather(city);
      setWeatherData(data);
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="App">
      <CitySelector onCityChange={setCity} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;