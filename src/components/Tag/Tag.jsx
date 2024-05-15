import PropTypes from "prop-types";
import "./Tag.scss";

const Tag = (props) => {
  return (
    <>
      <span className="tag" key={props.name}>
        {props.name}
      </span>
    </>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
};

export default Tag;
