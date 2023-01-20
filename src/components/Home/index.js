import React from "react";
import "./home.css";

function Home() {
  return (
    <section className="home">
      <div id="content-box">
        <p className="home-content">Hello! And Welcome to My Web Page!</p>
        <p className="home-content">
          Feel free to look around and enjoy the website!
        </p>
      </div>
      <div id="content-box">
        <p className="home-content">
          Please feel free to follow the links below to see places like my
        </p>
        <p className="home-content">Github Repo, Code Wars profile, and more</p>
      </div>
    </section>
  );
}

export default Home;
