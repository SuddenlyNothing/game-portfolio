import { Link } from "react-router-dom";

function LevelSelectButton(props) {
  return (
    <Link className="card" to={props.to}>
      <p>{props.text}</p>
      <img src="./img/temp.png" alt={props.text + " icon"} />
    </Link>
  );
}

export default LevelSelectButton;
