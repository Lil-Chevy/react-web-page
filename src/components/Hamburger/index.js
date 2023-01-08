import react from "react";
import Navbar from "../Nav-Bar";

function Hamburger() {
  return (
    <div className="App" id="outer-container">
      <Navbar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
    </div>
  );
}

export default Hamburger;
