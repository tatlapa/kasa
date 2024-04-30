import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img
          className="navbar-logo"
          src="/kasa/src/assets/logo.png"
          alt="logo-navbar"
        />
        <ul className="navbar-links">
          <li>
            <Link to="/kasa">Accueil</Link>
          </li>
          <li>
            <Link to="/kasa/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;