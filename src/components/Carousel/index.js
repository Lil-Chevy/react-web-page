import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PortfolioPhotoOne from "../../assets/Portfolio/0.png";
import PortfolioPhotoTwo from "../../assets/Portfolio/1.png";
import PortfolioPhotoThree from "../../assets/Portfolio/2.png";

import "./carousel.css";

// carousel is for projects to rotate on Projects page
function CarouselComponent() {
  return (
    <section className="carousel-container">
      <Carousel variant="dark">
        {/* Slide One */}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoOne}
            alt="slide one of project one"
          />
          <Carousel.Caption>
            <h3>Run-Buddy</h3>
            <p> This is the First Slide Paragraph</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* slide Two */}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoTwo}
            alt="slide one of project one"
          />
          <Carousel.Caption>
            <h3>Note Taker</h3>
            <p>This is the Second Slide Paragraph</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide Three */}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoThree}
            alt="slide one of project one"
          />
          <Carousel.Caption>
            <h3>ReadMe.md Generator</h3>
            <p>This is the Third Slide Paragraph </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
// export Carousel for Component usage
export default CarouselComponent;
