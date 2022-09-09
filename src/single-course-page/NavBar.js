import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./css/navbar.css";
const NavBar = () => {
  return (
    <div className={`navbar`}>
      <a href="#overview" className="navItem">
        Overview
      </a>
      <a href="#curriculum" className="navItem">
        Curriculum
      </a>
      <a href="#instructor" className="navItem">
        Instructor
      </a>
      <a href="#reviews" className="navItem">
        Reviews
      </a>
    </div>
  );
};

export default NavBar;
