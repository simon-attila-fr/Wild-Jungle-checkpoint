import React from "react";

import "./PlantList.css";

export default function PlantList() {
  /* Ajouter ici les méthodes nécéssaires pour récupérer de la donnée du backend et la stocker dans le front */

  return (
    <div id="wj-shopping-list">
      <h1>Mes plantes Wild</h1>

      <div className="filter">
        <select className="plantadd_input select" name="category" id="category">
          <option value="0">Tous les types de plantes</option>
          <option> {/* Ajouter ici les différentes catégories */}</option>
        </select>
      </div>

      <div className="wj-plant-list">
        {/* Générer ici un composant PlantItem pour chaque plante de la la base de données */}
      </div>
    </div>
  );
}
