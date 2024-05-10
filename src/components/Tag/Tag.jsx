import PropTypes from "prop-types";
import "./Tag.scss";

const Tag = (props) => {
  return (
    <>
      {props.tags.map((tag) => {
        return (
          <span className="tag" key={tag}>
            {tag}
          </span>
        );
      })}
    </>
  );
};

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Tag;
