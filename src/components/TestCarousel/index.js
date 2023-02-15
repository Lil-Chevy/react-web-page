import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Images from "../../assets/Portfolio/0.png";
import "./testingCarousel.css";

// carousel is for projects to rotate on Projects page
//  SEE NOTES AT BOTTOM  ->>>>>>

function TestingCarouselComponent(props) {
  // dynamically render photos in slides for the carousel
  const portfolioImages = [
    {
      name: "Run Buddy",
      descriptions:
        " Run Buddy is a website that offers fitness training services",
      alt: "Run Buddy Project",
    },
    {
      name: "Note Taker",
      descriptions:
        "This app is to be used for taking personal notes that can be created, updated, or deleted.",
      alt: "Note Taker Project",
    },
    {
      name: "ReadMe.md Generator",
      descriptions:
        "given answers to a list of questions, the application will produce a ReadMe.md",
      alt: "Readme Generator Project",
    },
    {
      name: "Work Day Scheduler",
      descriptions:
        "This app is used to help schedule your work day. Uses persistent data to save information",
      alt: "Work Day Scheduler Project",
    },
    {
      name: "Robot Gladiators",
      descriptions:
        "An MVP Project to help the user enjoy their time fighting robots",
      alt: "Robot Gladiators Project",
    },
    {
      name: "Bug Bash!",
      descriptions:
        "Social Media site made for problem solving code issues. Log in an post your issues!",
      alt: "Bug Bash Website Project",
    },
    {
      name: "SiteSeer",
      descriptions:
        "Social Media site dedicated to campers finding their next location for camping.",
      alt: "SiteSeer Website Project",
    },
  ];

  return (
    <section className="carousel-container">
      {/* carousel start */}
      <Carousel variant="dark">
        {/* slides  */}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            // dynamic rendering of image
            src={Images}
            alt="slide One of project one"
          />
          {/* captions */}
          <Carousel.Caption>
            {/* Name Of Slide */}
            <h3>{portfolioImages.name}</h3>
            {/* Description of Project */}
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
//  ../assets/portfolio/[i].png }
//  break
//
//                              }}

// add href link if clicked on in the array of objects
// study notes
