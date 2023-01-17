import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./navbar.css";

function Navbar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/resume">
        Resume
      </a>
      <a className="menu-item" href="/projects">
        Projects
      </a>
      <a className="menu-item" href="/testingpage">
        Testing Page
      </a>
    </Menu>
  );
}

export default Navbar;
