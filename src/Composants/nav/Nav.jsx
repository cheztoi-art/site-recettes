import "./Nav.css";
import logo from "../../assets/Img/logo.png";
import { Link } from "react-router-dom";

function MonNav() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="description" id="logopic" />
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/recettes">Recettes</Link>
          <Link to="/contactpage">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default MonNav;
