import Game from "./components/Game";
import Home from "./components/Home";
import pokemonBackground from "./assets/pokemon-background.gif";
import { useState } from "react";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [level, setLevel] = useState("");
  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${pokemonBackground})`,
      }}
    >
      {gameStart ? (
        <Game level={level} />
      ) : (
        <Home setGameStart={setGameStart} level={level} setLevel={setLevel} />
      )}
    </div>
  );
}

export default App;
