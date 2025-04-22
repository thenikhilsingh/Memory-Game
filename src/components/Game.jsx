import React from "react";
import PokemonLogo from "../assets/pokemon-logo.png";
import EasyLevel from "./EasyLevel";
import MediumLevel from "./MediumLevel";
import HardLevel from "./HardLevel";

export default function Game({ level }) {
  return (
    <div className="h-screen w-screen flex flex-col justify-evenly items-center ">
      <header className="flex justify-around items-center  pt-2 pb-2 w-full gap-180 ">
        <div>
          <img className="h-30" src={PokemonLogo} alt="" />
        </div>
        <div className="border-2 rounded-xl p-2 h-25 flex flex-col justify-center text-3xl bg-[#2654FF] ">
          <div>Score:0</div>
          <div>Best Score:0</div>
        </div>
      </header>
      <main>{level}</main>
      <footer>
        <div className="font-bold text-4xl text-[white]">0/5</div>
      </footer>
    </div>
  );
}
