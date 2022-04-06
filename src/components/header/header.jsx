import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import * as fa from "react-icons/fa";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <buton>
        <i className="fa fa-bars"></i>
      </buton>
      <a href="#">
        <img src={logo} alt="" className="header__logo" />
      </a>
      <div>
        <img src={user} alt="" />
        <span>Join me</span>
      </div>
      <div className="header__input-container">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search" className="header__input" />
        <i className="fa fa-bars"></i>
      </div>
      <div>
        <button>
          <fa.FaHeart />
        </button>
        <button>
          <fa.FaEnvelope />
        </button>
        <button>
          <fa.FaBell />
        </button>
        <button>
          <fa.FaPlus /> Post your ad
        </button>
      </div>
    </div>
  );
};

export default Header;
