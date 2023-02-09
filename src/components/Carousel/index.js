import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Smokies from "../../assets/Photos/weddingPhoto.jpg";
import "./carousel.css";

// carousel is for projects to rotate on Projects page
function CarouselComponent() {
  return (
    <section className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={Smokies}
            alt="slide one of project one"
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Paragraph</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={Smokies}
            alt="slide one of project one"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Paragraph</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default CarouselComponent;
