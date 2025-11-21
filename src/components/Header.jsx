import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#2ab7ca] p-4">
      <div>Logo</div>
      <div>
        <nav className="flex gap-4 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <div>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Header;
