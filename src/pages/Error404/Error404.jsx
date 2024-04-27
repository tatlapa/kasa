import { Link } from "react-router-dom";
import "./Error404.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Error404 = () => {
  return (
    <>
    <Navbar />
      <div className="error404-container">
        <h1 className="error404-title">404</h1>
        <p className="error404-text">
          Oups! La page que vous demandez n’existe pas.
        </p>
        <Link to="/" className="error404-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
