import React, { useState } from "react";
import PokemonLogo from "../assets/pokemon-logo.png";
import memoryGame from "../assets/memory-game.png";
import Btn from "./Btn";
import BtnRounded from "./BtnRounded";
import { mdiMusic, mdiVolumeHigh } from "@mdi/js";
import Icon from "@mdi/react";
import Game from "./Game";
import EasyLevel from "./EasyLevel";
import MediumLevel from "./MediumLevel";
import HardLevel from "./HardLevel";

export default function Home({ setGameStart, setLevel }) {
  function handleEasyClick() {
    setGameStart(true);
    setLevel(<EasyLevel />);
  }
  function handleMediumLevel() {
    setGameStart(true);
    setLevel(<MediumLevel />);
  }
  function handleHardLevel() {
    setGameStart(true);
    setLevel(<HardLevel />);
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
        <Btn name="Easy" onCLick={handleEasyClick} />
        <Btn name="Medium" onCLick={handleMediumLevel} />
        <Btn name="Hard" onCLick={handleHardLevel} />
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
