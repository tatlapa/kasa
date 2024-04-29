import "./Stars.scss";
import PropTypes from "prop-types";
import { StarIcon } from "@heroicons/react/24/solid";

const Stars = (props) => {
  
  const stars = Array.from({ length: 5 }, (_, index) => {
    
    return (
      <StarIcon
        key={index}
        className={`star-icon ${index < props.rating ? "star-icon-active" : ""}`}
      />
    );
  });

  return <div className="stars-container">{stars}</div>;
};

Stars.propTypes = {
  rating: PropTypes.number,
};

export default Stars;
