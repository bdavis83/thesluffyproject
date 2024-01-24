import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import axios from "axios";
import "./DisplayForecastPage.css";

const DisplayForecastPage = () => {
  const { resortId } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchResortCoordinates = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/ski_resorts/coordinates/${resortId}/`
        );
        setCoordinates(response.data);
      } catch (error) {
        console.error("Error fetching resort coordinates:", error.message);
      }
    };

    fetchResortCoordinates();
  }, [resortId]);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      if (!coordinates) {
        return;
      }

      try {
        const pointResponse = await axios.get(
          `https://api.weather.gov/points/${coordinates.latitude},${coordinates.longitude}`,
          {
            headers: {
              "User-Agent": "Mozilla/5.0",
              Accept: "application/ld+json",
            },
          }
        );

        console.log("API Response:", pointResponse.data);

        // Ensure properties and properties.forecast exist in the response
        // if (
        //   !pointResponse.data ||
        //   !pointResponse.data.properties ||
        //   !pointResponse.data.properties.forecast
        // ) {
        //   console.error("Invalid API response format");
        //   return;
        // }

        let forecastUrl = pointResponse.data.forecast;

        let forecastResponse = await axios.get(forecastUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0",
            Accept: "application/geo+json",
          },
        });

        console.log("Forecast API Response:", forecastResponse.data);

        // Ensure the 'periods' property exists in the forecast response
        // if (
        //   !forecastResponse.data ||
        //   !forecastResponse.data.properties ||
        //   !forecastResponse.data.properties.periods
        // ) {
        //   console.error("Invalid forecast API response format");
        //   return;
        // }

        setWeatherData(forecastResponse.data);
        console.log("Weather Data:", weatherData);
      } catch (error) {
        console.error("Error fetching weather forecast:", error.message);
      }
    };
    fetchWeatherForecast();
  }, [coordinates]);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <div>
        {weatherData.properties.periods.map((period, index) => (
          <WeatherCard key={index} period={period} />
        ))}
      </div>
    </div>
  );
};

export default DisplayForecastPage;
