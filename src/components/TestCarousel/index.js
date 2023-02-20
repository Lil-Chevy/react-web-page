import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Images from "../../assets/Portfolio/0.png";
import "./testingCarousel.css";

// carousel is for projects to rotate on Projects page
//  SEE NOTES AT BOTTOM  ->>>>>>

const TestingCarouselComponent = ({ sku }) => {
  // dynamically render photos in slides for the carousel
  const [portfolioImages] = useState([
    {
      Name: "Run Buddy",
      descriptions:
        " Run Buddy is a website that offers fitness training services",
      alt: "Run Buddy Project",
      sku: "0.png",
    },
    {
      name: "Note Taker",
      descriptions:
        "This app is to be used for taking personal notes that can be created, updated, or deleted.",
      alt: "Note Taker Project",
      sku: "1.png",
    },
    {
      name: "ReadMe.md Generator",
      descriptions:
        "given answers to a list of questions, the application will produce a ReadMe.md",
      alt: "Readme Generator Project",
      sku: "2.png",
    },
    {
      name: "Work Day Scheduler",
      descriptions:
        "This app is used to help schedule your work day. Uses persistent data to save information",
      alt: "Work Day Scheduler Project",
      sku: "3.png",
    },
    {
      name: "Robot Gladiators",
      descriptions:
        "An MVP Project to help the user enjoy their time fighting robots",
      alt: "Robot Gladiators Project",
      sku: "4.png",
    },
    {
      name: "Bug Bash!",
      descriptions:
        "Social Media site made for problem solving code issues. Log in an post your issues!",
      alt: "Bug Bash Website Project",
      sku: "5.png",
    },
    {
      name: "SiteSeer",
      descriptions:
        "Social Media site dedicated to campers finding their next location for camping.",
      alt: "SiteSeer Website Project",
      sku: "6.png",
    },
  ]);
  // added Remove is neccessary
  const currentPhotos = portfolioImages.filter(
    (portfolioImages) => portfolioImages.sku === sku
  );

  return (
    <section className="carousel-container">
      {/* carousel start */}
      <Carousel variant="dark">
        {/* slides  */}
        <Carousel.Item>
          {/* added */}
          {currentPhotos.map((sku, i) => (
            <img
              className="d-block w-100 firstPhoto"
              // dynamic rendering of image
              src={require(`../../assets/Portfolio/${i}.png`)}
              alt="slide One of project one"
            />
            // added
          ))}
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
};
// export Carousel for Component usage
export default TestingCarouselComponent;

// from lesson to repurpose the dynamic rendering of photos
// {
//   photos.map((image, i) => (
//     <img src={require(`../../assets/small/${category}/${i}.jpg`).default} />
//   ));
// }

//  Notes: conditionally render with an if statement
//  using to iterate until reaching the maximum number of photos
// then reset to base number.

// Iterating function idea for dynamic card reading.
// if (i < the number of photos) {
// i = 0   ({[i].png})
// }else if (var i = 0; i < Number of photos; i++) {
//  ../assets/portfolio/[i].png }
//  break
// }}

// note for testing
// add href link if clicked on in the array of objects
// dynamic href
// the below is a good idea
//  function countThis() {
//  var count = 0;
//   for(var i = 0; i < array.length;i++) {
//    count++ or i++ for the sake of jpeg
// };

// use the above to iterate numbers and using the variable count instead of I in jpg!!
// attach to button click event through js?
//this will add to the count helping increase dynamically but we will need to find
// out how to do it on the slide so it wont blitz through them, will have to reset the function once it reaches array length
