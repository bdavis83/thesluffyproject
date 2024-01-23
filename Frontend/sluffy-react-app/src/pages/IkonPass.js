import React, { useState, useEffect } from "react";
import SkiResortCard from "../components/SkiResortCard";

const IkonPass = () => {
  const [ikonResorts, setIkonResorts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/ski_resorts/all/")
      .then((response) => response.json())
      .then((data) => {
        const filteredResorts = data.filter(
          (resort) => resort.pass_type === "Ikon"
        );
        setIkonResorts(filteredResorts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Ikon Pass Resorts</h1>
      <div className="resort-cards-container">
        {ikonResorts.map((resort) => (
          <SkiResortCard key={resort.id} resort={resort} />
        ))}
      </div>
    </div>
  );
};

export default IkonPass;
