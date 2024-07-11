import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useRef } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
