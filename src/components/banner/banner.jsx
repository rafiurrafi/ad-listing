import React from "react";
import Container from "../container/container";
import "./banner.scss";

const Banner = (props) => {
  return (
    <div className="banner">
      <Container className="banner__container">
        <h1 className="banner__heading">
          You can #Buy, #Rent, #Booking anything from here.
        </h1>
        <p className="banner__text">
          Buy and sell everything from used cars to mobile phones and computers,
          or search for property, jobs and more in the world.
        </p>
      </Container>
    </div>
  );
};

export default Banner;
