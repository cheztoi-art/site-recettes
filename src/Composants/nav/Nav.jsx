import "./Nav.css"
import logo from "../../assets/Img/logo.png"

function MonNav() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="description" id="logopic" />
        <div className="nav-links">
          <a href="#Accueil">Accueil</a>
          <a href="#Entrées">Entrées</a>
          <a href="#Plats">Plats</a>
          <a href="#Desserts">Desserts</a>
          <a href="#Contact">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default MonNav;