import React from "react";
import Container from "../container/container";
import * as fa from "react-icons/fa";
import "./footer.scss";
const Footer = (props) => {
  return (
    <div className="footer">
      <Container>
        <Subscriber />
      </Container>
    </div>
  );
};

export default Footer;
const Subscriber = () => {
  return (
    <div className="subscriber">
      <div className="subscriber__left">
        <h3>Subscribe for Latest Offers</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
          aliquid reiciendis! Exercitationem soluta provident non.
        </p>
      </div>
      <div className="subscriber__right">
        <input type="text" placeholder="Enter your email address" />
        <button>
          <fa.FaEnvelope />
          Subscribe
        </button>
      </div>
    </div>
  );
};
