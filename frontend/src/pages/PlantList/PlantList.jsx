import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PlantList.css";
import PlantItem from "@components/PlantItem/PlantItem";

export default function PlantList() {
  const [plantes, setPlantes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterSelection, setFilterSelection] = useState([]);

  function handleFilter(event) {
    setFilterSelection(event.target.value);
  }

  React.useEffect(() => {
    axios.get("http://localhost:5000/plants").then((response) => {
      setPlantes(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:5000/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div id="wj-shopping-list">
      <h1>Mes plantes Wild</h1>

      {/* Partie BONUS #2 */}
      <div className="filter">
        <select
          className="plantadd_input select"
          name="category"
          id="category"
          onChange={handleFilter}
        >
          <option value="0">Tous les types de plantes</option>
          {categories.map((categorie) => (
            <option value={categorie.id}> {categorie.name}</option>
          ))}
        </select>
      </div>

      <div className="wj-plant-list">
        {plantes
          .filter((e) =>
            filterSelection === 0 ? e : e.category_id === filterSelection
          )
          .map((plant) => (
            <Link to={`/plants/${plant.id}`}>
              <PlantItem key={plant.id} plant={plant} />
            </Link>
          ))}
      </div>
    </div>
  );
}
