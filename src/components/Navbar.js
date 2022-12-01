import React from "react";
import "../style.scss"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <h2>
            <NavLink to="/">amr muzashi</NavLink>
          </h2>
        </div>
        <ul className="links">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/skills">skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
