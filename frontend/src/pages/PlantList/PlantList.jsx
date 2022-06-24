import React, { useState } from "react";
import axios from "axios";
import "./PlantList.css";

export default function PlantList() {
  /* Ajouter ici les méthodes nécéssaires pour récupérer de la donnée du backend et la stocker dans le front */
  const [plantes, setPlantes] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:5000/plants").then((response) => {
      setPlantes(response.data);
    });
  }, []);

  return (
    <div id="wj-shopping-list">
      <h1>Mes plantes Wild</h1>

      {/* Partie BONUS #2 */}
      <div className="filter">
        <select className="plantadd_input select" name="category" id="category">
          <option value="0">Tous les types de plantes</option>
          <option> {/* Ajouter ici les différentes catégories */}</option>
        </select>
      </div>

      <div className="wj-plant-list">
        {plantes.map((plant) => (
          <div className="wj-plant-list-card">
            <img src={plant.image} alt={`This is ${plant.name}`} />
            <li key={plant.id}>
              <h3>{plant.name}</h3>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
