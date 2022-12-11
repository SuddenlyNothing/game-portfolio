import MainMenu from "./MainMenu/MainMenu";
import LevelSelect from "./LevelSelect/LevelSelect";
import GameDev from "./GameDev/GameDev";
import UIDesign from "./UIDesign/UIDesign";
import About from "./About/About";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="main-menu" element={<MainMenu />} />
      <Route path="level-select" element={<LevelSelect />} />
      <Route path="game-dev" element={<GameDev />} />
      <Route path="ui-design" element={<UIDesign />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Navigate to="main-menu" />} />
    </Routes>
  );
}

export default App;
