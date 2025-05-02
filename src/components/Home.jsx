import React, { useState } from "react";
import PokemonLogo from "../assets/pokemon-logo.png";
import memoryGame from "../assets/memory-game.png";
import Btn from "./Btn";
import BtnRounded from "./BtnRounded";
import {
  mdiMusic,
  mdiVolumeHigh,
  mdiVolumeOff,
  mdiMusicNoteOff,
} from "@mdi/js";
import Icon from "@mdi/react";
import GameDetailImg from "../assets/GameDetailImg.png";
import btnSound from "../assets/btnSound.wav";

export default function Home({
  setGameStart,
  setLevel,
  setTotalRounds,
  sound,
  setSound,
  isPlaying,
  onMusicToggle,
}) {
  const [gameDetail, setGameDetail] = useState(false);

  const playSound = () => {
    const audio = new Audio(btnSound);
    audio.play();
  };

  function handleEasyClick() {
    setGameStart(true);
    setTotalRounds(5);
    setLevel("easy");
    sound && playSound();
  }
  function handleMediumLevel() {
    setGameStart(true);
    setTotalRounds(10);
    setLevel("medium");
    sound && playSound();
  }
  function handleHardLevel() {
    setGameStart(true);
    setTotalRounds(15);
    setLevel("hard");
    sound && playSound();
  }
  function handleSoundBtn() {
    sound ? setSound(false) : setSound(true);
    sound && playSound();
  }

  function handleGameDetailBtn() {
    gameDetail == false ? setGameDetail(true) : setGameDetail(false);
    sound && playSound();
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
          <BtnRounded
            name={
              <Icon
                path={sound ? mdiVolumeHigh : mdiVolumeOff}
                size={1}
                onClick={handleSoundBtn}
              />
            }
          />
          <BtnRounded
            name={
              <Icon
                path={isPlaying ? mdiMusic : mdiMusicNoteOff}
                size={1}
                onClick={onMusicToggle}
              />
            }
          />
        </div>
        <div className="mr-10">
          <BtnRounded
            name={gameDetail ? "X" : "?"}
            onClick={handleGameDetailBtn}
          />
        </div>
      </div>
      {gameDetail && (
        <div
          className={`fixed right-20 flex transition-all duration-500 ease-in-out ${
            gameDetail ? "bottom-0" : "-bottom-full"
          }`}
        >
          <div className="flex flex-col gap-2">
            <div className="bg-blue-700 text-[#FFCD02] rounded-xl text-xl p-2 shadow-[0px_9px_18px_-6px_#000000]">
              Don't click on the same card twice!
            </div>
            <div className="bg-blue-700 text-[#FFCD02] rounded-xl text-xl p-2 shadow-[0px_9px_18px_-6px_#000000]">
              Click on POKEMON logo to go back.
            </div>
          </div>
          <img className="h-40" src={GameDetailImg} alt="" />
        </div>
      )}
    </div>
  );
}
