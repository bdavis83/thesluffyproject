import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisplayForecastPage = () => {
  const { resortId } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Make API call to fetch weather data for the specified resort ID
    // Update the URL to match your backend route
    fetch(
      `http://127.0.0.1:8000//api/ski_resorts/ski_resort/weather/${resortId}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [resortId]);

  return (
    <div>
      <h2>Weather Details</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Conditions: {weatherData.conditions}</p>
          {/* Add more weather details as needed */}
        </div>
      )}
    </div>
  );
};

export default DisplayForecastPage;
