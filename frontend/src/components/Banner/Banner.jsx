import "./Banner.css";
import { Link } from "react-router-dom";
import logo from "../../favicon.png";

function Banner() {
  return (
    <div className="wj-banner">
      <nav>
        <ul>
          <li>
            <Link to="/">Mes plantes Wild</Link>
          </li>
          <li>
            <Link to="/plants/add">Ajouter une plante</Link>
          </li>
        </ul>
      </nav>

      <Link className="wj-logo" to="/">
        <img src={logo} alt="Wild jungle" />
        <h1 className="wj-title">Wild Jungle</h1>
      </Link>
    </div>
  );
}

export default Banner;
