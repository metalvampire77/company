import React from "react";
import founderImg from "../assets/logo.jpg";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homeContainer">
        <div className="founder">
          <img src={founderImg} alt="" className="founderImg" />
        </div>
        <div className="motive">
          <p>To provide Quality and quantity assurance works to the Clients.</p>
          <button className="learnMoreBtn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
