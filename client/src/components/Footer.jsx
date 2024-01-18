import React from "react";
import logo from "../assets/logo.jpg";
import "./Navbar.css";

function Footer() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="links"></div>
      </div>
    </div>
  );
}

export default Footer;
