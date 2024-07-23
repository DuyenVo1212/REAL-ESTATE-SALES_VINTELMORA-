import React from "react";
import Slider from "react-slick";
import "./slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="silder">
      <div className="slider-title ms-5 pt-3">
        <h1 className="fw-bold">Homes For You</h1>
        <p>Based on homes you recently viewed</p>
      </div>
      <div className="silder-container mx-5">
        <Slider {...settings}>
          <div className="slider-item px-2">
            <img src="/slide/slide1.png" alt="" className="img-fluid shadow" />
          </div>
          <div className="slider-item px-2">
            <img src="/slide/slide2.png" alt="" className="img-fluid shadow" />
          </div>
          <div className="slider-item px-2">
            <img src="/slide/slide3.png" alt="" className="img-fluid shadow" />
          </div>
          <div className="slider-item px-2">
            <img src="/slide/slide4.png" alt="" className="img-fluid shadow" />
          </div>
          <div className="slider-item px-2">
            <img src="/slide/slide5.png" alt="" className="img-fluid shadow" />
          </div>
        </Slider>
      </div>
      <div className="slider-footer py-4">
        <p className="fw-bold text-center">
          <a href="#">
            More recommended homes <FaArrowRight />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Slide;
