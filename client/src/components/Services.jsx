import React from "react";
import "./Services.css";
import logo from "../assets/logo.jpg";

function Services() {
  return (
    <div className="services">
      <div className="containerServices">
        <div className="card">
          <img src={logo} alt="Avatar" className="card-img" />
          <div className="containerData">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
