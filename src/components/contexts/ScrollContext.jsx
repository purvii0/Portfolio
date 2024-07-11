import { createContext, useRef, useState } from "react";
import Contact from "../Contact";

export const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
  const connectRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (val) => {
    if (val === "connect") {
      connectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (val === "projects") {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (val === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (val === "home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ scrollToSection, connectRef, projectRef, skillsRef, homeRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
