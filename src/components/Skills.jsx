import { useContext } from "react";
import "./styles/Skills.css";
import { ScrollContext } from "./contexts/ScrollContext";
import Skillsets from "./skillsets";

function Skills() {
  const { skillsRef } = useContext(ScrollContext);
  return (
    <div className="skills" ref={skillsRef}>
      {"hello"}
      <div className="skills-card">
        <h1 className="heading">Skills</h1>
        <div className="skill-set">
          <Skillsets source={"./html-icon.png"} name={"HTML"} />
          <Skillsets source={"./Css-icon.png"} name={"CSS"} />
          <Skillsets source={"./React-icon.png"} name={"React"} />
          <Skillsets source={"./Redux-icon.png"} name={"Redux"} />
          <Skillsets source={"./html-icon.png"} name={"HTML"} />
          <Skillsets source={"./html-icon.png"} name={"HTML"} />
        </div>
      </div>
    </div>
  );
}
export default Skills;
