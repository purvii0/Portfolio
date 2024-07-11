import { useContext } from "react";
import "./styles/Projects.css";
import { ScrollContext } from "./contexts/ScrollContext";

function Projects() {
  const { projectRef } = useContext(ScrollContext);
  return (
    <div className="projects" ref={projectRef}>
      projects
    </div>
  );
}
export default Projects;
