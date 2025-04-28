import Game from "./components/Game";
import Home from "./components/Home";
import pokemonBackground from "./assets/pokemon-background.gif";
import { useState } from "react";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [level, setLevel] = useState(""); // easy, medium, hard
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [totalRounds, setTotalRounds] = useState(null);
  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${pokemonBackground})`,
      }}
    >
      {gameStart ? (
        <Game
          level={level}
          setGameStart={setGameStart}
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          currentRound={currentRound}
          setCurrentRound={setCurrentRound}
          totalRounds={totalRounds}
        />
      ) : (
        <Home
          setGameStart={setGameStart}
          setLevel={setLevel}
          setTotalRounds={setTotalRounds}
        />
      )}
    </div>
  );
}

export default App;
