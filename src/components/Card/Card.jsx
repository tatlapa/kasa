import "./Card.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link key={props.id} to={`/kasa/store/${props.id}`} className="card">
      <div className="card-gradient"></div>
      <img src={props.cover} className="card-cover"></img>
      <h2 className="card-title">{props.title}</h2>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
