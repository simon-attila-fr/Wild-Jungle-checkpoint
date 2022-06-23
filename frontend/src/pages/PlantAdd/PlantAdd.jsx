import { useEffect, useState } from "react";
import "./PlantAdd.css";

export default function PlantAdd() {
  const [form, setForm] = useState({
    name: "",
    category_id: 0,
    water: "",
    sun: "",
    price: "",
    image: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleChange = (e) => {
    const data = { ...form };
    data[e.target.name] = e.target.value;

    setForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_BACKEND_URL}/plants`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
    });
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
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label className="plantadd_label" htmlFor="category">
          Catégorie
          <select
            className="plantadd_input"
            name="category_id"
            id="category"
            value={form.category_id}
            onChange={handleChange}
          >
            <option value="0">Choisir une catégorie... </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
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
            value={form.water}
            onChange={handleChange}
          />
        </label>

        <label className="plantadd_label" htmlFor="sun">
          Besoin d'ensoleillement
          <input
            className="plantadd_input"
            id="sun"
            name="sun"
            type="number"
            value={form.sun}
            onChange={handleChange}
          />
        </label>

        <label className="plantadd_label" htmlFor="price">
          Prix
          <input
            className="plantadd_input"
            id="price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />
        </label>

        <label className="plantadd_label" htmlFor="image">
          Image
          <input
            className="plantadd_input"
            id="image"
            name="image"
            type="text"
            value={form.image}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Ajouter la plante
        </button>
      </form>
    </div>
  );
}
