import Game from "./components/Game";
import Home from "./components/Home";
import pokemonBackground from "./assets/pokemon-background.gif";
import { useState, useRef, useEffect } from "react";
import gameMusic from "./assets/gameMusic.mp3";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [level, setLevel] = useState(""); // easy, medium, hard
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [totalRounds, setTotalRounds] = useState(null);
  const [sound, setSound] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio only once
    audioRef.current = new Audio(gameMusic);
    audioRef.current.loop = true;

    return () => {
      // Cleanup when component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleMusicToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
          sound={sound}
        />
      ) : (
        <Home
          setGameStart={setGameStart}
          setLevel={setLevel}
          setTotalRounds={setTotalRounds}
          sound={sound}
          setSound={setSound}
          isPlaying={isPlaying}
          onMusicToggle={handleMusicToggle}
        />
      )}
    </div>
  );
}

export default App;
