import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  const [skiResort, setSkiResort] = useState([]);

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
        <Marker key={resort.id} position={[resort.latitude, resort.longitude]}>
          <Popup>{resort.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
