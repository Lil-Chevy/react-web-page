import React from "react";
import CarouselComponent from "../Carousel";
import "./projects.css";

function Projects() {
  return (
    <section>
      <div className="project-section">
        Please feel free to checkout my projects
      </div>
      <div>
        <CarouselComponent />
      </div>
    </section>
  );
}

export default Projects;
