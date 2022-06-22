/* eslint-disable react/prop-types */
import "../styles/PlantItem.css";

function PlantItem({ plant }) {
  const { name, water, light, price, image } = plant;

  return (
    <li className="lmj-plant-item">
      <span className="lmj-plant-item-price">{price}€</span>
      <img className="lmj-plant-item-cover" src={image} alt={`${name} cover`} />
      {name}
    </li>
  );
}

export default PlantItem;
