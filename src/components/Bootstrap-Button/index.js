import React from "react";
import "../../App.css";

function BootButton() {
  return (
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a
        className="btn btn-primary"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Bootstrap button
      </a>
    </header>
  );
}

export default BootButton;
