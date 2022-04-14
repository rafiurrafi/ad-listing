import React, { useState } from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import * as fa from "react-icons/fa";
import "./header.scss";
import Container from "../container/container";
import Dropdown from "../dropdown/dropdown";
import { IconButton, PostButton } from "../button/button";
import HeaderInput from "./headerInput";
const Header = ({ setOpenSidebar }) => {
  return (
    <div className="header my-3">
      <Container>
        <div className="header__content">
          <div>
            <IconButton onClick={() => setOpenSidebar("left")}>
              <i className="fa fa-bars"></i>
            </IconButton>
          </div>
          <a href="#" className="mx-3">
            <img src={logo} alt="" className="header__logo" />
          </a>
          <div className="mx-3 header__profile-container">
            <img src={user} alt="" className="mr-1" />
            <span>Join me</span>
          </div>
          <HeaderInput />
          <div className="header__icon-container">
            <Dropdown iconName={<fa.FaHeart />} notificationNumber={0}>
              <a href="#" className="view-all-btn">
                View all
              </a>
              <div className="dropdown__items">
                <div className="dropdown__item unread">
                  <div className="dropdown__item-img">
                    <img src="" alt="Not found" />
                    <div className="dropdown__item-active"></div>
                  </div>
                  <div className="dropdown__item-content">
                    <h4>Obaidullah Khan</h4>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="dropdown__item-unread">12</div>
                </div>
                <div className="dropdown__item">
                  <div className="dropdown__item-img">
                    <img src="" alt="Not found" />
                    <div className="dropdown__item-active"></div>
                  </div>
                  <div className="dropdown__item-content">
                    <h4>Obaidullah Khan</h4>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="dropdown__item-unread">12</div>
                </div>
              </div>
            </Dropdown>
            <Dropdown iconName={<fa.FaEnvelope />} notificationNumber={0}>
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
              </ul>
            </Dropdown>
            <Dropdown iconName={<fa.FaBell />} notificationNumber={0}>
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
              </ul>
            </Dropdown>
            <PostButton>
              <fa.FaPlus /> Post your ad
            </PostButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
