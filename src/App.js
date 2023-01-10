import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Nav-Bar";
import Body from "./components/Body";
import Footer from "./components/footer";

function App() {
  return (
    <section>
      <Header>
        <Navbar />
      </Header>
      <Body />
      <Footer />
    </section>
  );
}

export default App;
