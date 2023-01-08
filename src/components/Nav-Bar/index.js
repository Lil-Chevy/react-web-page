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
        about
      </a>
      <a className="menu-item" href="/resume">
        resume
      </a>
      <a className="menu-item" href="/projects">
        projects
      </a>
    </Menu>
  );
}

export default Navbar;
