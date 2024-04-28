import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "./Carousel.scss";

const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="carousel">
        <ChevronLeftIcon
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {images.map((item, index) => {
          return (
            <img
              src={images}
              key={index}
              className={slide === index ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <ChevronRightIcon
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
