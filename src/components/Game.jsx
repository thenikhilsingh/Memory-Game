import React from "react";
import PokemonLogo from "../assets/pokemon-logo.png";
import ScoreBoard from "./ScoreBoard";
import TotalRounds from "./TotalRounds";
import EasyLevel from "./EasyLevel";
import MediumLevel from "./MediumLevel";
import HardLevel from "./HardLevel";
import btnSound from "../assets/btnSound.wav";

export default function Game({
  level,
  setGameStart,
  score,
  setScore,
  bestScore,
  setBestScore,
  currentRound,
  setCurrentRound,
  totalRounds,
  sound,
}) {
  const playSound = () => {
    const audio = new Audio(btnSound);
    audio.play();
  };

  function handlePokemonLogo() {
    setGameStart(false);
    setScore(0);
    setBestScore(0);
    setCurrentRound(0);
    sound && playSound();
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-evenly items-center ">
      <header className="flex justify-around items-center  pt-2 pb-2 w-full gap-180 ">
        <div>
          <img
            className="h-30  hover:scale-[1.2] active:translate-y-[5px]"
            src={PokemonLogo}
            alt=""
            onClick={handlePokemonLogo}
          />
        </div>
        <div>
          <ScoreBoard score={score} bestScore={bestScore} />
        </div>
      </header>
      <main>
        {level == "easy" ? (
          <EasyLevel
            score={score}
            setScore={setScore}
            setBestScore={setBestScore}
            setCurrentRound={setCurrentRound}
            level={level}
            sound={sound}
          />
        ) : level == "medium" ? (
          <MediumLevel
            score={score}
            setScore={setScore}
            setBestScore={setBestScore}
            setCurrentRound={setCurrentRound}
            level={level}
            sound={sound}
          />
        ) : (
          <HardLevel
            score={score}
            setScore={setScore}
            setBestScore={setBestScore}
            setCurrentRound={setCurrentRound}
            level={level}
            sound={sound}
          />
        )}
      </main>
      <footer>
        <TotalRounds currentRound={currentRound} totalRounds={totalRounds} />
      </footer>
    </div>
  );
}
