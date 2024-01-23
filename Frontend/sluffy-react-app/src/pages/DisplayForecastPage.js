import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DisplayForecastPage.css";
const DisplayForecastPage = () => {
  const { resortId } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Make API call to fetch weather data for the specified resort ID
    // Update the URL to match your backend route
    fetch(`http://127.0.0.1:8000/api/ski_resorts/weather/${resortId}`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [resortId]);

  return (
    <div>
      <h2>Weather Details</h2>
      {weatherData && (
        <div>
          {weatherData.weather_data.map((period, index) => (
            <div key={index}>
              <p>StartTime: {period.startTime}</p>
              <p>Temperature: {period.temperature}</p>
              <p>Short Forecast: {period.shortForecast}</p>
              <p>Detailed Forecast: {period.detailedForecast}</p>
              <p>Wind: {period.wind}</p>
              <p>Wind Direction: {period.windDirection}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayForecastPage;
