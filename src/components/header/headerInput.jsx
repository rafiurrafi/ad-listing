import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
const HeaderInput = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setOpen(false));
  return (
    <div className="header__input-section">
      <div className="header__input-container">
        <i className="fa fa-search mr-2"></i>
        <input type="text" placeholder="Search" className="header__input" />
        <i
          className="fa fa-bars"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        ></i>
      </div>
      <div
        className={`${open ? "active" : ""} header__input-details`}
        ref={ref}
      >
        <div className="header__details-input">
          <input type="text" placeholder="Category" className="" />
          <input type="text" placeholder="Subcategory" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderInput;
