import React from "react";
import PokemonLogo from "../assets/pokemon-logo.png";
import pokemonBackground from "../assets/pokemon-background.gif";
import memoryGame from "../assets/memory-game.png";
import Btn from "./Btn";
import BtnRounded from "./BtnRounded";
import { mdiMusic, mdiVolumeHigh } from "@mdi/js";
import Icon from "@mdi/react";

export default function Home() {
  return (
    <div
      className="h-screen w-screen flex flex-col justify-evenly items-center  bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${pokemonBackground})`,
      }}
    >
      <div>
        <img className="h-60" src={PokemonLogo} alt="" />
      </div>
      <div>
        <img className="w-80" src={memoryGame} alt="" />
      </div>
      <div className="flex gap-5">
        <Btn name="Easy" />
        <Btn name="Medium" />
        <Btn name="Hard" />
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
