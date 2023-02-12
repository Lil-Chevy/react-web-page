import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Images from "../../assets/Portfolio/0.png";
import "./testingCarousel.css";

// carousel is for projects to rotate on Projects page
//  SEE NOTES AT BOTTOM  ->>>>>>

function TestingCarouselComponent(props) {
  // dynamically render photos in slides for the carousel
  const portfolioImages = {
    name: "Run Buddy",
    descriptions:
      " Run Buddy is a website that offers fitness training services",
    alt: "slide one of project one",
  };
  return (
    <section className="carousel-container">
      <Carousel variant="dark">
        {/* Slide One */}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={Images}
            alt="slide One of project one"
          />
          <Carousel.Caption>
            <h3>{portfolioImages.name}</h3>
            <p>{portfolioImages.descriptions}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
// export Carousel for Component usage
export default TestingCarouselComponent;

//  Notes: conditionally render with an if statement
//  using to iterate until reaching the maximum number of photos
// then reset to base number.

// Iterating function idea for dynamic card reading.

// if (i < the number of photos) {
// i = 0   ({[i].png})
// }else if (var i = 0; i < Number of photos; i++) {
//  [i].png }
//  break
//
//                              }}
// something like the above ^^^^^
