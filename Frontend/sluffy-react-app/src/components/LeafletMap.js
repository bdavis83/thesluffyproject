import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayForecastPage from "../pages/DisplayForecastPage";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const LeafletMap = () => {
  const [skiResort, setSkiResort] = useState([]);

  const customIcon = new L.Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });

  async function fetchSkiResorts() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/ski_resorts/all/"
      );
      setSkiResort(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchSkiResorts();
  }, []);

  return (
    <MapContainer center={[48.3689, -99.9962]} zoom={4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {skiResort.map((resort) => (
        <Marker
          key={resort.id}
          position={[resort.latitude, resort.longitude]}
          icon={customIcon}
        >
          <Popup>
            <div>
              {resort.name}
              <br />
              {resort.city}, {resort.state}
              <br />
              {resort.region}
              <br />
              {resort.pass_type}
              <br />
              <Link to={`/forecast/${resort.id}`}>Weather Forecast</Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
