import React from "react";
import "./carousel.scss";
import Container from "../container/container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import * as md from "react-icons/md";

const Carousel = ({ title, items }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: <md.MdOutlineArrowBackIosNew />,
    nextArrow: <md.MdArrowForwardIos />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="carousel">
      <Container>
        <div>
          <div className="carousel__title">
            <h3>{title}</h3>
            <a href="/path">show all</a>
          </div>
          <Slider {...settings}>
            {items.map((item) => (
              <div>
                <img src={item.img} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Carousel;
