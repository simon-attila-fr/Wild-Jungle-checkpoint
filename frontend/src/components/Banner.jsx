import "../styles/Banner.css";
import { Link } from "react-router-dom";
import logo from "../favicon.png";

function Banner() {
  return (
    <div className="lmj-banner">
      <nav>
        <ul>
          <li>
            <Link to="/">Mes plantes</Link>
          </li>
          <li>
            <Link to="/plants/add">Ajouter une plante</Link>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">La maison jungle</h1>
    </div>
  );
}

export default Banner;
