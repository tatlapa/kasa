import './Banner.scss'
import PropTypes from "prop-types";

const Banner = (props) => {

  return (
    <>  
        <div className="banner">
        <div className="gradient" style={{backgroundColor: `rgba(0, 0, 0, ${props.opacity})`}}></div>
        <img src={props.image} className="banner-img" alt="" />    
        <h1 className="banner-title">{props.title}</h1>
        </div>
    </>
  )
}


Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  opacity: PropTypes.number,
};

export default Banner
