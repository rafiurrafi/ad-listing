import React, { useState } from "react";
import * as fa from "react-icons/fa";
const SidebarDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar__dropdown-area mt-5">
      <div className="sidebar__dropdown">
        <SideDropHeader onOpen={() => setOpen(!open)}>
          Electronics
        </SideDropHeader>
        <SideDropContents open={open}>
          <SideDropItem>Phone</SideDropItem>
        </SideDropContents>
      </div>
    </div>
  );
};
function SideDropHeader({ children, onOpen }) {
  return (
    <div className="sidebar__dropdown-menu" onClick={onOpen}>
      <fa.FaPlus /> <span className="ml-2">{children}</span>
    </div>
  );
}
function SideDropContents({ children, open, content }) {
  return (
    <div
      ref={content}
      className={`${open ? "show" : ""} sidebar__dropdown-content`}
    >
      {children}
    </div>
  );
}
function SideDropItem({ children }) {
  return (
    <button>
      <fa.FaMinus /> <span className="ml-2">{children}</span>
    </button>
  );
}
export default SidebarDropdown;
