import './Banner.scss'

const Banner = (props) => {

  return (
    <>  
        <div className="banner">
        <img src={props.image} className="banner-img" alt="" />    
        <h1 className="banner-title">{props.title}</h1>
        </div>
    </>
  )
}

import PropTypes from "prop-types";

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Banner
