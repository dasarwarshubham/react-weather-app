import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${API_URL}&q=${city}`);
    const data = response.data;
    const weatherData = {
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: data.weather[0].icon,
    };
    return weatherData;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
      throw new Error("Unable to connect to server.");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      throw new Error("An error occurred while processing the request.");
    }
  }
};
