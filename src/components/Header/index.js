import React from "react";
import NavBar from "../Nav-Bar";
import Smokies from "../../assets/Header/smokies.png";
import "./header.css";

function Header() {
  return (
    <section>
      <div className="headerImage">
        <img src={Smokies} alt="The Great Smoky Mountains" />
      </div>
      <div>
        <NavBar />
      </div>
    </section>
  );
}

export default Header;
