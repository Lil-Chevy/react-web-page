import React, { useState, useEffect } from "react";
import CurrentPage from "../CurrentPage";
import "../../App.css";

// this component dynamically renders the welcome message in the header of the home page
function WelcomeMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (CurrentPage === "/") {
      setMessage("Welcome");
    } else if (CurrentPage === "/About") {
      setMessage("About Me");
    } else if (CurrentPage === "/Resume") {
      setMessage("My Resume");
    } else if (CurrentPage === "/Projects") {
      setMessage("Projects");
    } else {
      setMessage("Contact Me!");
    }
  }, []);

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
