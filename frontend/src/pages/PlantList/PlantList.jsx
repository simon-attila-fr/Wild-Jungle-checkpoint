import React, { useEffect, useState } from "react";
import PlantItem from "@components/PlantItem/PlantItem";
import { Link } from "react-router-dom";

import "./PlantList.css";

export default function PlantList() {
  const [plants, setPlants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);


  const handleChange = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/plants`)
      .then((res) => res.json())
      .then((data) => setPlants(data));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div id="wj-shopping-list">
      <h1>Mes plantes Wild</h1>

      <select
        className="plantadd_input"
        name="category"
        id="category"
        value={category}
        onChange={handleChange}
      >
        <option value="0">Choisir une catégorie... </option>
        {categories.map((category) => (
          <option value={category.id}>{category.name}</option>
        ))}
      </select>

      <div className="wj-plant-list">
        {plants.map((plant) => (
          <Link key={plant.id} to={`/plants/${plant.id}`}>
            <PlantItem plant={plant} />
          </Link>
        ))}
      </div>
    </div>
  );
}
