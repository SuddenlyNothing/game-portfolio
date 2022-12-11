import LevelSelectButton from "./LevelSelectButton";
import { Link } from "react-router-dom";
import "./LevelSelect.css";

function LevelSelect(props) {
  return (
    <div className="level-select">
      <h1>Level Select</h1>
      <div className="levels-container">
        <LevelSelectButton to="/game-dev" text="Game Dev" />
        <LevelSelectButton to="/ui-design" text="UI Design" />
        <LevelSelectButton to="/about" text="About Me" />
      </div>
      <Link className="btn" to="/main-menu">
        Back
      </Link>
    </div>
  );
}

export default LevelSelect;
