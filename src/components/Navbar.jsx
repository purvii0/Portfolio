import { useContext, useRef, useState } from "react";
import "./styles/Navbar.css";
import { ScrollContext } from "./contexts/ScrollContext";

function Navbar() {
  const { scrollToSection } = useContext(ScrollContext);

  return (
    <nav className="desktop-nav">
      <div className="logo">Purvi Gupta</div>
      <div className="nav-button">
        <button
          className="cat-btn"
          onClick={() => {
            scrollToSection("home");
          }}
        >
          Home
        </button>
        <button
          className="cat-btn"
          onClick={() => {
            scrollToSection("skills");
          }}
        >
          Skills
        </button>
        <button
          className="cat-btn"
          onClick={() => {
            scrollToSection("projects");
          }}
        >
          Projects
        </button>
        <button className="cat-btn">
          <img className="linked-in" src="./linkedin-img.png" />
        </button>
        <button
          className="cat-btn"
          onClick={() => {
            scrollToSection("connect");
          }}
        >
          Let's Connect
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
