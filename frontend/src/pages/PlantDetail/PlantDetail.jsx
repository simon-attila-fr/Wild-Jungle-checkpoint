import Care from "@components/Care/Care";

import "./PlantDetail.css";

export default function PlantDetail() {
  return (
    <div id="wj-plant-detail">
      <div className="image half">
        {/* indiquer source de l'image */}
        <img src="" alt="" />
      </div>

      <div className="detail half">
        <h1>{/* nom de la plante */}</h1>

        <div className="data">
          <div className="category">Category : {/* nom de la catégorie */}</div>

          <div className="light">
            {/* indiquer dans amount la quantité de lumière */}
            Besoin en lumière : <Care type="sun" amount="" />
          </div>

          <div className="water">
            {/* indiquer dans amount la quantité d'eau */}
            Besoin en eau : <Care type="water" amount="" />
          </div>

          <div className="price">Prix: {/* prix */}€</div>
        </div>

        <div className="center">
          <button className="buy" type="button">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
