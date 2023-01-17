import React from "react";
import "../../App.css";
import "./bootstrap-page.css";

function BootstrapPage() {
  return (
    <section>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
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
              <a href="/bootstrappage" className="nav-link link-dark px-2">
                Bootstrap page
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>
            <span className="fs-4"> Welcome</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            {/* place to put nav bar  */}
            {/* will need to be on the right side */}
          </form>
        </div>
      </header>
    </section>
  );
}

export default BootstrapPage;
