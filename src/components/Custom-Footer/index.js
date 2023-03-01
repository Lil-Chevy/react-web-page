import React from "react";
import "./customFooter.css";

// Footer Component below contains links for Contact information, GitHub, LinkedIn, and Code wars Profile.
function CustomFooter() {
  return (
    <section className="footer">
      {/* Contact Links */}
      <p className="footer-item">
        <a href="/contact"> Contact Me!</a>
      </p>
      {/* GitHub Link */}
      <p className="footer-item">
        <a href="https://github.com/nowaczewski">GitHub</a>
      </p>
      {/* LinkedIn Link */}
      <p className="footer-item">
        <a href="https://www.linkedin.com/in/jack-nowaczewski/">LinkedIn</a>
      </p>
      {/* CodeWars Profile Link */}
      <p className="footer-item">
        <a href="https://www.codewars.com/users/Jack_spicy">CodeWars</a>
      </p>
    </section>
  );
}

export default CustomFooter;
