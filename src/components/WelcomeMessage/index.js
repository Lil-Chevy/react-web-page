import React, { useState, useEffect } from "react";
// import CurrentPage from "../CurrentPage";
import "../../App.css";

// this component dynamically renders the welcome message in the header of the home page
function WelcomeMessage() {
  const [message, setMessage] = useState("");
  // currentLocation gets the current pathname in the URL
  const currentLocation = window.location.pathname;
  useEffect(() => {
    // if the current location matches the "/" pathname in the URL, set the message to welcome on the landing page.
    if (currentLocation === "/") {
      setMessage("Welcome");
      // if the current location matches the "/about" pathname in the URL, set the message to About Me.
    } else if (currentLocation === "/about") {
      setMessage("About Me");
      // if the current location matches the "/resume" pathname in the URL, set the message to Resume.
    } else if (currentLocation === "/resume") {
      setMessage("My Resume");
      // if the current location matches the "/projects" pathname in the URL, set the message to Projects.
    } else if (currentLocation === "/projects") {
      setMessage("Projects");
    } else {
      setMessage("Contact Me!");
    }
  });

  return (
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
    >
      <svg className="bi me-2" width="40" height="32"></svg>
      <span className="fs-4">{message}</span>
    </a>
  );
}

export default WelcomeMessage;
