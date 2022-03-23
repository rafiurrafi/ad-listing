import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
const Header = () => {
  return (
    <div className="header">
      <buton>
        <i className="fa fa-bars"></i>
      </buton>
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div>
        <img src={user} alt="" />
        <span>Join me</span>
      </div>
      <div>
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search" />
        <i className="fa fa-bars"></i>
      </div>
      <div>
        <button>
          <i className="fa fa-heart"></i>
        </button>
        <button>
          <i className="fa fa-envelope"></i>
        </button>
        <button>
          <i className="fa fa-bell"></i>
        </button>
        <button>
          <i className="fa fa-plus"></i>Post your ad
        </button>
      </div>
    </div>
  );
};

export default Header;
