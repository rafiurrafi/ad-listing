import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import "./sidebar.scss";
const Sidebar = ({ isOpen, onClose }) => {
  const ref = useRef(null);
  useClickOutside(ref, () => onClose("none"));
  return (
    <div ref={ref} className={`${isOpen ? "show" : ""} sidebar`}>
      <div className="sidebar__content">
        <button className="sidebar__close" onClick={() => onClose("none")}>
          X
        </button>
        Sidebar
      </div>
    </div>
  );
};

export default Sidebar;
