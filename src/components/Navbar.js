import React from "react";
import "../style.scss";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { useRef } from "react";


const Navbar = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("mobile");
	};

  // const [mobile, setmobile] = useState(false);
  // const toggleClass = () => {
  //   setmobile(true);
  // };



  
  return (
    <>
      <div className="nav">
        <div className="logo">
          <h2>
            <NavLink to="/">amr muzashi</NavLink>
          </h2>
        </div>
        <i onClick={showNavbar} id="menu"
          class="menu fa-solid fa-bars"
        ></i>
        <ul ref={navRef} className="links">
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
