import "./Details.scss";
import Stars from "../Stars/Stars";
import PropTypes from "prop-types";

const Details = (props) => {
  return (
    <>
      <div className="details-container">
        <div className="details-wrapper1">
          <h2 className="details-title">{props.title}</h2>
          <p className="details-location">{props.location}</p>
          <div>
            {props.tags.map((tag) => {
              return (
                <span className="details-tag" key={tag}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className="details-wrapper2">
          <div className="details-wrapper3">
            <p>{props.name}</p>
            <img className="details-img" src={props.picture} alt="" />
          </div>
          <Stars rating={props.rating}/>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  picture: PropTypes.string,
  accomodation: PropTypes.object,
  rating: PropTypes.number,
};

export default Details;
