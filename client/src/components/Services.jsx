import React from "react";
import "./Services.css";
import road from "../assets/road.jpg";
import civil from "../assets/civil.jpg";
import mech from "../assets/mech.jpg";
import painting from "../assets/painting.jpg";
import transport from "../assets/transport.jpg";
import operationalAssistance from "../assets/operationalAssistance.jpg";

function Services() {
  const data = [
    {
      id: 1,
      photo: civil,
      description: "Lorem ipsum dolor sit amet consectetur adipisi.",
      name: "Civil",
    },
    {
      id: 2,
      photo: mech,
      description: "Lorem ipsum dolor sit amet consectetur adipisi.",
      name: "Mech",
    },
    {
      id: 3,
      photo: painting,
      description: "Lorem ipsum dolor sit amet consectetur adipisi.",
      name: "Painting",
    },
    {
      id: 4,
      photo: road,
      description: "Lorem ipsum dolor sit amet consectetur adipisi.",
      name: "Road",
    },
    {
      id: 5,
      photo: transport,
      description: "Lorem ipsum dolor sit amet consectetur adipisi.",
      name: "Transport",
    },
    {
      id: 6,
      photo: operationalAssistance,
      description: "Lorem ipsum dolor sit amet consectetur adipisi.",
      name: "Operational Assistance",
    },
  ];

  const cards = data.map((item) => (
    <a key={item.id} href="#!" className="card">
      <div className="front" style={{ backgroundImage: `url(${item.photo})` }}>
        <p>{item.name}</p>
      </div>
      <div className="back">
        <div>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <button className="button">Click Here</button>
        </div>
      </div>
    </a>
  ));

  return (
    <div className="services">
      <div className="containerServices">
        <div className="content">
          <h1 className="heading">Services</h1>
          {/* <p className="description">Hover over a card to flip it.</p> */}
          {cards}
        </div>
      </div>
    </div>
  );
}
export default Services;
