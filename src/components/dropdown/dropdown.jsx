import React, { useRef, useState } from "react";
import { IconButton, IconButtonNotification } from "../button/button";
import * as fa from "react-icons/fa";
import "./dropdown.scss";
import useClickOutside from "../../hooks/useClickOutside";
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown" ref={ref}>
      <IconButton onClick={handleOpen}>
        <fa.FaHeart />
        <IconButtonNotification>0</IconButtonNotification>
      </IconButton>
      <div className={`${open ? "open" : ""} dropdown__content`}>hello</div>
    </div>
  );
};

export default Dropdown;
