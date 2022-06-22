import React, { useEffect, useState } from "react";
import PlantItem from "@components/PlantItem";
import { Link } from "react-router-dom";

export default function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);
  return (
    <div>
      <h1>PlantList</h1>
      <ul>
        {plants.map((plant) => (
          <Link to={`/plants/${plant.id}`}>
            <PlantItem key={plant.id} plant={plant} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
