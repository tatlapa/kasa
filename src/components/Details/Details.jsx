import "./Details.scss";
import Stars from "../Stars/Stars";
import Dropdown from "../Dropdown/Dropdown";
import PropTypes from "prop-types";
import Tag from "../Tag/Tag";

const Details = (props) => {
  return (
    <>
      <div className="details-container">
        <div className="details-wrapper1">
          <h2 className="details-title">{props.title}</h2>
          <p className="details-location">{props.location}</p>
          <div className="details-tag">
            <Tag tags={props.tags} />
          </div>
        </div>
        <div className="details-wrapper2">
          <div className="details-wrapper3">
            <p>{props.name}</p>
            <img className="details-img" src={props.picture} alt="image" />
          </div>
          <Stars rating={props.rating} />
        </div>
      </div>
      <div className="details-dropdown">
        <div className="details-container-dropdown">
          <Dropdown
            label="Description"
            content={props.description}
            className="details-content-dropdown"
          />
        </div>
        <div className="details-container-dropdown">
          <Dropdown
            label="Équipements"
            content={props.equipments}
            className="details-content-dropdown"
          />
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  label: PropTypes.string,
  description: PropTypes.string,
  equipments: PropTypes.arrayOf(PropTypes.string),
};

export default Details;
