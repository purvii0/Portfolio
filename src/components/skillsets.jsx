import "./styles/skillsets.css";

function Skillsets({ source, name }) {
  return (
    <div className="skill-container">
      <div className="skill-img-container">
        <img src={source} className="skillimage" />
      </div>
      <p className="skill-name">{name}</p>
    </div>
  );
}

export default Skillsets;
