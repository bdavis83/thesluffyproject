import React from "react";
import "./WeatherCard.css";

const formatDateTime = (dateTimeString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };
  const formattedDateTime = new Date(dateTimeString).toLocaleString(
    undefined,
    options
  );
  return formattedDateTime;
};

const WeatherCard = ({ period }) => {
  return (
    <div className="weather-card">
      <h3>Weather Details</h3>
      <p>
        <span className="label">Start Time:</span>{" "}
        {formatDateTime(period.startTime)}
      </p>
      <p>
        <span className="label">Temperature:</span> {period.temperature}{" "}
        {period.temperature && period.temperature.unit}
      </p>
      <p>
        <span className="label">Short Forecast:</span> {period.shortForecast}
      </p>
      <p>
        <span className="label">Detailed Forecast:</span>{" "}
        {period.detailedForecast}
      </p>
      <p>
        <span className="label">Wind:</span> {period.windSpeed}{" "}
        {period.windSpeed && period.windSpeed.unitCode}
      </p>
      <p>
        <span className="label">Wind Direction:</span> {period.windDirection}
      </p>
    </div>
  );
};

export default WeatherCard;
