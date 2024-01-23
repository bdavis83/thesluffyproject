// SkiResortCard.js
import React from "react";
import "./SkiResortCard.css";

const SkiResortCard = ({ resort }) => {
  return (
    <div className="resort-card">
      <h3>{resort.name}</h3>
      <p>City: {resort.city}</p>
      <p>State: {resort.state}</p>
      {/* Add other resort information as needed */}
    </div>
  );
};

export default SkiResortCard;
