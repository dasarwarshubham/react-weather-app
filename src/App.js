import React, { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { getWeatherData } from "./services/weather-api";
import { Spinner } from "react-bootstrap";

import { ReactComponent as WeatherIcon } from "./assets/weather-icon.svg";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeatherData(city);
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div>
        <WeatherIcon
          className="weather-icon"
          style={{ maxHeight: "150px", width: "100%" }}
        />
        <h1 className="text-center my-4">Weather App</h1>
        <Form handleSearch={handleSearch} />
        {loading && (
          <div className="text-center my-3">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        )}
        {error && (
          <div className="alert alert-danger my-3" role="alert">
            {error}
          </div>
        )}
        {Object.keys(weatherData).length !== 0 && (
          <Weather weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
