import React from "react";
import "../../App.css";
import "./header.css";
import WelcomeMessage from "../WelcomeMessage";

function Header() {
  return (
    <section>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              {/* NavBar Links */}
              <a
                href="/"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link link-dark px-2">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/resume" className="nav-link link-dark px-2">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="/projects" className="nav-link link-dark px-2">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="/testingpage" className="nav-link link-dark px-2">
                Testing Page
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* welcome header */}
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <WelcomeMessage />
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0"
            role="search"
          ></form>
        </div>
      </header>
    </section>
  );
}

export default Header;
