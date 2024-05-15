import axios from "axios";

const API_KEY = "a2bfba7e9ba840c4bed125057241505";

const getWeather = async (city) => {
  const [cityName, countryCode] = city.split(",");
  const response = await axios.get(
    "http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName},${countryCode}&aqi=no"
  );
  return response.data;
};

export default getWeather;
