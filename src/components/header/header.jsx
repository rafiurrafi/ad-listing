import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import * as fa from "react-icons/fa";
import "./header.scss";
import Container from "../container/container";
import { IconButton, IconButtonNotification } from "../button/button";
const Header = () => {
  return (
    <div className="header my-3">
      <Container>
        <div className="header__content">
          <button>
            <i className="fa fa-bars"></i>
          </button>
          <a href="#" className="mx-3">
            <img src={logo} alt="" className="header__logo" />
          </a>
          <div className="mx-3 header__profile-container">
            <img src={user} alt="" className="mr-1" />
            <span>Join me</span>
          </div>
          <div className="header__input-container">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" className="header__input" />
            <i className="fa fa-bars"></i>
          </div>
          <div>
            <IconButton>
              <fa.FaHeart />
              <IconButtonNotification>0</IconButtonNotification>
            </IconButton>
            <IconButton>
              <fa.FaEnvelope />
              <IconButtonNotification>0</IconButtonNotification>
            </IconButton>
            <IconButton>
              <fa.FaBell />
              <IconButtonNotification>0</IconButtonNotification>
            </IconButton>
            <button>
              <fa.FaPlus /> Post your ad
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
