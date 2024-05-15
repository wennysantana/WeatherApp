import axios from "axios";

const API_KEY = "124f44d28d6a4fefa27132448241505";

const getWeather = async (city) => {
  const [cityName, countryCode] = city.split(",");
  const response = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName},${countryCode}&aqi=no`
  );  
  return response.data;
};

export default getWeather;
