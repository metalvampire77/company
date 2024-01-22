import React, { useState, useEffect } from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import road from "../assets/road.jpg";

const carouselData = [
  {
    id: 1,
    imageSrc: road,
    label: "First slide label",
    description:
      "Miscellaneous civil jobs in rolling Mills - LMM, WRM, MMSM at vizag steel plant..",
  },
  {
    id: 2,
    imageSrc: road,
    label: "Second slide label",
    description:
      "Cleaning of stock house, cooling towers and PCI plant of BF-3 at vizag steel plant.",
  },
  {
    id: 3,
    imageSrc: road,
    label: "Third slide label",
    description: "Evacuation of Ash hoopers and clearing of Bowl Mills at TPP.",
  },
  {
    id: 4,
    imageSrc: road,
    label: "Third slide label",
    description:
      "Repair and maintenance of Boundary wall at vizag steel plant.",
  },
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projectsContainer">
        <p className="projectHeading">PROJECTS</p>
        <Carousel
          style={{
            width: "80%",
            margin: "auto",
            borderRadius: "10px", // Add border radius
            overflow: "hidden", // Ensure the border radius is applied to the content
          }}
        >
          {carouselData.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.imageSrc}
                alt={item.label}
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5
                  style={{
                    borderRadius: "15px",
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {item.description}
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
