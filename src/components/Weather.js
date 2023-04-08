import React from "react";
import { Card } from "react-bootstrap";

function Weather({ weatherData }) {
  const { city, country, description, temperature, humidity, wind, icon } =
    weatherData;

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>
          {city}, {country}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weather-icon"
            className="weather-icon"
          />
          <h1 className="temperature">{temperature}&deg;C</h1>
        </div>
        <div className="my-3">
          <div>Humidity: {humidity}%</div>
          <div>Wind Speed: {wind}m/s</div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Weather;
