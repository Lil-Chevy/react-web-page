import React, { useState } from "react";
// Css
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
// import from Portfolio Images from Assets Directory
import PortfolioPhotoOne from "../../assets/Portfolio/0.png";
import PortfolioPhotoTwo from "../../assets/Portfolio/1.png";
import PortfolioPhotoThree from "../../assets/Portfolio/2.png";
import PortfolioPhotoFour from "../../assets/Portfolio/3.png";
import PortfolioPhotoFive from "../../assets/Portfolio/4.png";
import PortfolioPhotoSix from "../../assets/Portfolio/5.png";
import PortfolioPhotoSeven from "../../assets/Portfolio/6.png";

// carousel is for projects to rotate on Projects Page to dynamically render portfolio photos

function CarouselComponent() {
  let PortfolioList = [
    PortfolioPhotoOne,
    PortfolioPhotoTwo,
    PortfolioPhotoThree,
    PortfolioPhotoFour,
    PortfolioPhotoFive,
    PortfolioPhotoSix,
    PortfolioPhotoSeven,
  ];

  // set state
  const [index, setIndex] = useState(0);

  //  handle select

  const handleSelect = (selectIndex, e) => {
    setIndex(selectIndex);
  };

  return (
    <section className="carousel-section">
      <Carousel
        variant="dark"
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-container"
      >
        {PortfolioList.map((PortfolioList, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 portfolio-photo "
              src={PortfolioList}
              alt={`Slide ${i}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
// export Carousel for Component usage
export default CarouselComponent;
