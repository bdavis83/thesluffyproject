import React, { useEffect, useState } from "react";

const IndependantPasses = () => {
  const [independentResorts, setIndependentResorts] = useState([]);

  useEffect(() => {
    // Fetch data from your Django backend
    // Replace the URL with your actual API endpoint
    fetch("http://127.0.0.1:8000/api/ski_resorts/all/")
      .then((response) => response.json())
      .then((data) => {
        // Filter resorts based on the pass type (e.g., "independent")
        const filteredResorts = data.filter(
          (resort) => resort.pass_type === "independent"
        );
        setIndependentResorts(filteredResorts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Independent Passes</h1>
      <ul>
        {independentResorts.map((resort) => (
          <li key={resort.id}>
            <p>Name: {resort.name}</p>
            <p>City: {resort.city}</p>
            {/* Add other resort information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndependantPasses;
