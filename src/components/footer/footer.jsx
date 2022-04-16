import React from "react";
import Container from "../container/container";
import * as fa from "react-icons/fa";
import "./footer.scss";
import logo from "../../assets/logo.png";
const Footer = (props) => {
  return (
    <div className="footer">
      <Container>
        <Subscriber />
      </Container>
      <Container className="footer__bottom">
        <FooterPart>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterIconMenu>
            <fa.FaMapMarkerAlt />
            1420 West Jalkuri Fatullah, Narayanganj, BD
          </FooterIconMenu>
          <FooterIconMenu>
            <fa.FaEnvelope />
            1420 West Jalkuri Fatullah, Narayanganj, BD
          </FooterIconMenu>
          <FooterIconMenu>
            <fa.FaPhone />
            1420 West Jalkuri Fatullah, Narayanganj, BD
          </FooterIconMenu>
        </FooterPart>
        <FooterPart>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterIconMenu>Store Location</FooterIconMenu>
          <FooterIconMenu>Order Tracking</FooterIconMenu>
          <FooterIconMenu>My Account</FooterIconMenu>
          <FooterIconMenu>Size Guide</FooterIconMenu>
          <FooterIconMenu>GFAQ</FooterIconMenu>
        </FooterPart>
        <FooterPart>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterIconMenu>About Us</FooterIconMenu>
          <FooterIconMenu>Delivery System</FooterIconMenu>
          <FooterIconMenu>Secure Payment</FooterIconMenu>
          <FooterIconMenu>Contact Us</FooterIconMenu>
          <FooterIconMenu>Settings</FooterIconMenu>
        </FooterPart>
        <FooterPart>
          <FooterImg src={logo} />
          <FooterCount number="929,238" text="Registered User" />
          <FooterCount number="242,789" text="Total Ads" />
        </FooterPart>
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
const FooterPart = ({ children }) => {
  return <div className="footer__part">{children}</div>;
};
const FooterTitle = ({ children }) => {
  return <h3 className="footer__title">{children}</h3>;
};
const FooterIconMenu = ({ children }) => {
  return (
    <a href="" className="footer__icon-menu">
      {children}
    </a>
  );
};
const FooterImg = ({ src }) => {
  return <img src={src} alt="" className="footer__img" />;
};
const FooterCount = ({ number, text }) => {
  return (
    <div className="footer__count">
      <div className="footer__number">{number}</div>
      <div className="footer__text">{text}</div>
    </div>
  );
};
