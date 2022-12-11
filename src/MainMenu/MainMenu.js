import { useNavigate } from "react-router-dom";
import "./MainMenu.css";

function MainMenu(props) {
  const navigate = useNavigate();

  const onStartClicked = () => {
    navigate("/level-select");
  };

  const onSettingsClicked = () => {};

  const onCreditsClicked = () => {};

  return (
    <div className="main-menu">
      <h1>Bix's Portfolio</h1>
      <button className="btn" onClick={onStartClicked}>
        Start
      </button>
      <button className="btn" onClick={onSettingsClicked}>
        Settings
      </button>
      <button className="btn" onClick={onCreditsClicked}>
        Credits
      </button>
    </div>
  );
}

export default MainMenu;
