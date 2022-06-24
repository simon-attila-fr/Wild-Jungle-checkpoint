import { useEffect, useState } from "react";
import axios from "axios";
import "./PlantAdd.css";

// Partie BONUS #1
export default function PlantAdd() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [water, setWater] = useState("");
  const [sun, setSun] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }
  function handleWater(event) {
    setWater(event.target.value);
  }
  function handleSun(event) {
    setSun(event.target.value);
  }
  function handlePrice(event) {
    setPrice(event.target.value);
  }
  function handleImage(event) {
    setImage(event.target.value);
  }
  function handleCategory(event) {
    setCategoryId(event.target.value);
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/plant", {
        name,
        categoryId,
        water,
        sun,
        price,
        image,
      })
      // eslint-disable-next-line func-names
      .then(function (response) {
        console.warn(response);
      })
      // eslint-disable-next-line func-names
      .catch(function (error) {
        console.error(error);
      });

    // Code de gestion de l'envoi du formulaire en POST
  };

  return (
    <div id="plantadd">
      <h1 className="plantadd_title">Ajouter une plante</h1>

      <form className="plantadd_form" onSubmit={handleSubmit}>
        <label className="plantadd_label" htmlFor="name">
          Nom de la plante
          <input
            className="plantadd_input"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleName}
          />
        </label>

        <label className="plantadd_label" htmlFor="category">
          Catégorie
          <select className="plantadd_input" name="category_id" id="category">
            <option value="0">Choisir une catégorie... </option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                onClick={handleCategory}
              >
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <label className="plantadd_label" htmlFor="water">
          Besoin d'arrosage
          <input
            className="plantadd_input"
            id="water"
            name="water"
            type="number"
            value={water}
            onChange={handleWater}
          />
        </label>

        <label className="plantadd_label" htmlFor="sun">
          Besoin d'ensoleillement
          <input
            className="plantadd_input"
            id="sun"
            name="sun"
            type="number"
            value={sun}
            onChange={handleSun}
          />
        </label>

        <label className="plantadd_label" htmlFor="price">
          Prix
          <input
            className="plantadd_input"
            id="price"
            name="price"
            type="number"
            value={price}
            onChange={handlePrice}
          />
        </label>

        <label className="plantadd_label" htmlFor="image">
          Image
          <input
            className="plantadd_input"
            id="image"
            name="image"
            type="text"
            value={image}
            onChange={handleImage}
          />
        </label>

        <button className="button" type="submit">
          Ajouter la plante
        </button>
      </form>
    </div>
  );
}
