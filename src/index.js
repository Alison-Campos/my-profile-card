import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Alison.jpeg" alt="Avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Alison Campos</h1>
      <p>
        Professional developer, passionate about web or desktop development and
        database management. Willing to put into practice all the skills
        acquired throughout my business computing career, as well as eager to
        learn new areas and techniques to expand knowledge
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill text="Html + Css" emoji="💪" color="blue" />
      <Skill text="Java" emoji="💪" color="yellow" />
      <Skill text="Javascript" emoji="💪" color="orange" />
      <Skill text="React" emoji="💪" color="orangered" />
      <Skill text="Python" emoji="💪" color="yellow" />
      <Skill text="C#" emoji="" color="orangered" />
      <Skill text=".Net" emoji="💪" color="blue" />
      <Skill text="Entity Framework" emoji="💪" color="orange" />
      <Skill text="Booststrap" emoji="💪" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.text} </span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
