import React from 'react';

const WeatherIcon = ({ icon }) => {
  const iconUrl = 'http:${icon}'; 
  return <img src={iconUrl} alt="Weather icon" />;
};

export default WeatherIcon;