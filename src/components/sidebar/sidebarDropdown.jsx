import React from "react";
import * as fa from "react-icons/fa";
const SidebarDropdown = () => {
  return (
    <div className="sidebar__dropdown-area mt-5">
      <div className="sidebar__dropdown">
        <div className="sidebar__dropdown-menu">
          <fa.FaPlus /> <span className="ml-2">Electronics</span>
        </div>
        <div className="sidebar__dropdown-content">
          <button>
            <fa.FaMinus /> <span className="ml-2">phone</span>
          </button>
          <button>
            <fa.FaMinus /> <span className="ml-2">Mobile</span>
          </button>
          <button>
            <fa.FaMinus /> <span className="ml-2">Accessories</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarDropdown;
