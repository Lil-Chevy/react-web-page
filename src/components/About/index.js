import React from "react";
import "./about.css";
import "../../App.css";
import AboutPhoto from "../../assets/Photos/weddingPhoto.jpg";

function About() {
  return (
    <section className="section">
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
          <p className="fs-5 col-md-8">
            Welcome to my page! I have gone on quite the journey to get to this
            point. I have always wanted how to learn how to work on computers,
            and I never thought I'd learn how to code on them!
          </p>
          <div className="row g-5">
            <div className="col-md-6">
              <h2>Starter projects</h2>
              <p>
                all Projects shown will be on the projects page. please select
                the button below to be taken there.
                <div className="mb-5">
                  <a
                    href="/docs/5.3/examples/"
                    className="btn btn-primary btn-lg px-4"
                  >
                    Projects
                  </a>
                </div>
              </p>
              <ul className="icon-list ps-0">
                <li className="d-flex align-items-start mb-1">
                  <a href="/projects" rel="noopener" target="_blank">
                    Project Page
                  </a>
                </li>
                <li className="text-muted d-flex align-items-start mb-1">
                  More Projects are available (coming soon!)
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h2>Any Suggestions?</h2>
              <p>Leave a review on my contact page for more information!</p>
              <ul className="icon-list ps-0">
                <li className="d-flex align-items-start mb-1">
                  <a href="/">unused Link</a>
                </li>
                <li className="d-flex align-items-start mb-1">
                  <a href="/">unused Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
