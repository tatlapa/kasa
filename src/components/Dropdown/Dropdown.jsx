import "./Dropdown.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const renderContent = () => {
    if (Array.isArray(props.content)) {
      return (
        <ul className="dropdown-list">
          {props.content.map((item, index) => (
            <li key={index} className="dropdown-text">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="dropdown-text">{props.content}</p>;
  };

  return (
    <>
      <div
        className={`dropdown-container ${props.className}`}
        onClick={toggleDropdown}
      >
        <div className="dropdown-title-container">
          <h2 className="dropdown-title">{props.label}</h2>
          {isOpen ? (
            <ChevronUpIcon className="dropdown-icon" />
          ) : (
            <ChevronDownIcon className="dropdown-icon" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className={`dropdown-content ${props.className}`}>
          {renderContent()}
        </div>
      )}
    </>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  className: PropTypes.string,
};

export default Dropdown;
