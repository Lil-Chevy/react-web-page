import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PortfolioPhotoOne from "../../assets/Portfolio/0.png";
import PortfolioPhotoTwo from "../../assets/Portfolio/1.png";
import PortfolioPhotoThree from "../../assets/Portfolio/2.png";
import PortfolioPhotoFour from "../../assets/Portfolio/3.png";
import PortfolioPhotoFive from "../../assets/Portfolio/4.png";
import PortfolioPhotoSix from "../../assets/Portfolio/5.png";
import PortfolioPhotoSeven from "../../assets/Portfolio/6.png";

import "./carousel.css";

// carousel is for projects to rotate on Projects page
// Iterate for dynamic card reading.

function CarouselComponent() {
  return (
    <section className="carousel-container">
      <Carousel variant="dark">
        {/* Slide One Run Buddy*/}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoOne}
            alt="slide One of first project"
          />
          <Carousel.Caption>
            <h3>Run Buddy</h3>
            <p> Run Buddy is a website that offers fitness training services</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* slide Two Note Taker*/}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoTwo}
            alt="slide Two of Second project"
          />
          <Carousel.Caption>
            <h3>Note Taker</h3>
            <p>
              This app is to be used for taking personal notes that can be
              created, updated, or deleted.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide Three ReadMe.md Generator*/}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoThree}
            alt="slide Three of third project"
          />
          <Carousel.Caption>
            <h3>ReadMe.md Generator</h3>
            <p>
              given answers to a list of questions, the application will produce
              a ReadMe.md
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* slide four Work Day Scheduler*/}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoFour}
            alt="slide Four of fourth project"
          />
          <Carousel.Caption>
            <h3>Work Day Scheduler</h3>
            <p>
              A work day planner to help with the users' needs of scheduling.
              Persistent data will be saved to the user's local storage for call
              back later on.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide five Robot Gladiators */}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoFive}
            alt="slide Five of fifth project"
          />
          <Carousel.Caption>
            <h3>Robot Gladiators</h3>
            <p>helps clients enjoy their spare time fighting robots.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide six */}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoSix}
            alt="slide Six of Sixth project"
          />
          <Carousel.Caption>
            <h3>BugBash!</h3>
            <p>
              This application is a collaborative project using front-end and
              back-end technologies to create a community for new developers to
              share and fix their coding bugs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide seven */}
        <Carousel.Item>
          <img
            className="d-block w-100 firstPhoto"
            src={PortfolioPhotoSeven}
            alt="slide seven of seven project"
          />
          <Carousel.Caption>
            <h3>Siteseer</h3>
            <p>
              This application is a collaborative project using front-end and
              back-end technologies to create a community for Campers to find
              and reserve privately listed campsites.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
// export Carousel for Component usage
export default CarouselComponent;
