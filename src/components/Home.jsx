import React from "react";
import PokemonLogo from "../assets/pokemon-logo.png";
import memoryGame from "../assets/memory-game.png";
import Btn from "./Btn";
import BtnRounded from "./BtnRounded";
import { mdiMusic, mdiVolumeHigh } from "@mdi/js";
import Icon from "@mdi/react";

export default function Home({ setGameStart, setLevel, setTotalRounds }) {
  function handleEasyClick() {
    setGameStart(true);
    setTotalRounds(3);
    setLevel("easy");
  }
  function handleMediumLevel() {
    setGameStart(true);
    setTotalRounds(4);
    setLevel("medium");
  }
  function handleHardLevel() {
    setGameStart(true);
    setTotalRounds(5);
    setLevel("hard");
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-evenly items-center ">
      <div>
        <img className="h-60" src={PokemonLogo} alt="" />
      </div>
      <div>
        <img className="w-80" src={memoryGame} alt="" />
      </div>
      <div className="flex gap-5">
        <Btn name="Easy" onClick={handleEasyClick} />
        <Btn name="Medium" onClick={handleMediumLevel} />
        <Btn name="Hard" onClick={handleHardLevel} />
      </div>
      <div className="flex w-full  justify-between items-center">
        <div className="ml-10 flex gap-3">
          <BtnRounded name={<Icon path={mdiVolumeHigh} size={1} />} />
          <BtnRounded name={<Icon path={mdiMusic} size={1} />} />
        </div>
        <div className="mr-10">
          <BtnRounded name="?" />
        </div>
      </div>
    </div>
  );
}
