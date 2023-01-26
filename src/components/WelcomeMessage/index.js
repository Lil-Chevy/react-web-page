import React from "react";
import "../../App.css";
// this component dynamically renders the welcome message in the header of the home page
function WelcomeMessage() {
  return (
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
    >
      <svg className="bi me-2" width="40" height="32"></svg>
      <span className="fs-4"> Welcome</span>
    </a>
  );
}

export default WelcomeMessage;
