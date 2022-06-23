import React, { useEffect, useState } from "react";
import PlantItem from "@components/PlantItem/PlantItem";
import { Link } from "react-router-dom";

import "./PlantList.css";

export default function PlantList() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const categoryId = parseInt(e.target.value, 10);
    let filtered = plants;

    if (categoryId !== 0) {
      filtered = plants.filter((plant) => plant.category_id === categoryId);
    }

    setFilteredPlants(filtered);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/plants`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data);
      });

    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div id="wj-shopping-list">
      <h1>Mes plantes Wild</h1>

      <div className="filter">
        <select
          className="plantadd_input select"
          name="category"
          id="category"
          onChange={handleChange}
        >
          <option value="0">Tous les types de plantes</option>
          {categories &&
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>
      </div>

      <div className="wj-plant-list">
        {filteredPlants.map((plant) => (
          <Link key={plant.id} to={`/plants/${plant.id}`}>
            <PlantItem plant={plant} />
          </Link>
        ))}
      </div>
    </div>
  );
}
