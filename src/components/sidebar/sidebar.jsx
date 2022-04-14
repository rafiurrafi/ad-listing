import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import logo from "../../assets/logo.png";
import "./sidebar.scss";
import SidebarDropdown from "./sidebarDropdown";

const Sidebar = ({ isOpen, onClose }) => {
  const ref = useRef(null);
  useClickOutside(ref, () => onClose("none"));
  return (
    <div ref={ref} className={`${isOpen ? "show" : ""} sidebar`}>
      <div className="sidebar__content">
        <button className="sidebar__close" onClick={() => onClose("none")}>
          X
        </button>
        <a href="#">
          <img src={logo} alt="" className="header__logo" />
        </a>
        <SidebarDropdown />
      </div>
    </div>
  );
};

export default Sidebar;
