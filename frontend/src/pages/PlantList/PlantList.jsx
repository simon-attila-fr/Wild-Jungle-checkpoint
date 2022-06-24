import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PlantList.css";
import PlantItem from "@components/PlantItem/PlantItem";

export default function PlantList() {
  /* Ajouter ici les méthodes nécéssaires pour récupérer de la donnée du backend et la stocker dans le front */
  const [plantes, setPlantes] = useState([]);
  const [categories, setCategories] = useState([]);

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
        <select className="plantadd_input select" name="category" id="category">
          <option value="0">Tous les types de plantes</option>
          {categories.map((categorie) => (
            <option value={categorie.id}> {categorie.name}</option>
          ))}
        </select>
      </div>

      <div className="wj-plant-list">
        {plantes.map((plant) => (
          <Link to={`/plants/${plant.id}`}>
            <PlantItem key={plant.id} plant={plant} />
          </Link>
        ))}
      </div>
    </div>
  );
}
