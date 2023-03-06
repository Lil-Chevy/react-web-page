import React from "react";
import { useLocation } from "react-router-dom";
// imported Links
import Home from "../Home";
import About from "../About";
import Resume from "../Resume";
import Projects from "../Projects";
import Contact from "../Contact";
// CurrentPage function will determine whether or not the
// current page will display a message provided in header
function CurrentPage() {
  const location = useLocation();

  const currentLocation = location.pathname;
  return (
    <div>
      {currentLocation === "/" && <Home />}
      {currentLocation === "/about" && <About />}
      {currentLocation === "/resume" && <Resume />}
      {currentLocation === "/projects" && <Projects />}
      {currentLocation === "/contact" && <Contact />}
    </div>
  );
}

export default CurrentPage;
