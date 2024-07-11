import { useContext } from "react";
import "./styles/Home.css";
import { ScrollContext } from "./contexts/ScrollContext";

function Home() {
  const { homeRef, scrollToSection } = useContext(ScrollContext);
  return (
    <div className="home" ref={homeRef}>
      <div className="home-page">
        <div className="details-section">
          <h1 className="heading">Hello, I'm Purvi!</h1>
          <h4 className="text-d">
            I'm a computer science student diving into the world of web
            development, creating innovative digital experiences one line of
            code at a time.
          </h4>
          <button
            className="contact-btn"
            onClick={() => {
              scrollToSection("connect");
            }}
          >
            Contact me
          </button>
        </div>
        <div className="image-container">
          <img
            className="image-section"
            src="./portfolioBg.png"
            alt="my-image"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
