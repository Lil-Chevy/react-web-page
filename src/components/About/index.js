import React from "react";
import "./about.css";
import "../../App.css";
import AboutPhoto from "../../assets/Photos/weddingPhoto.jpg";

function About() {
  return (
    <section className="about-page-section">
      <div className="mx-auto p-4 py-md-5">
        <div>
          <h1>Hey there, This is me (and my Wife)!</h1>
          <div className="photo-box">
            <img
              className="about-photo"
              src={AboutPhoto}
              alt="Photograph of the Author"
            />
          </div>
          <p className="fs-5 col-md-8 about-page-paragraph">
            Welcome to my page! I have gone on quite the journey to get to this
            point. I have always wanted how to learn how to work on computers,
            and I never thought I'd learn how to code on them!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
