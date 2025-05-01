import React, { useState, useEffect } from "react";
import Card from "./Card";
import { shuffleArr } from "../utils";
import loseImg from "../assets/lose.jpg";
import winImg from "../assets/win.jpeg";
import cardSound from "../assets/cardSound.mp3";
import btnSound from "../assets/btnSound.wav";

// Fallback images
import pikachu from "../assets/pikachu.gif";
import bulbasaur from "../assets/bulbasaur.gif";
import charmander from "../assets/charmander.gif";
import squirtle from "../assets/squirtle.gif";
import jigglypuff from "../assets/jigglypuff.gif";
import meowth from "../assets/meowth.gif";
import eevee from "../assets/eevee.gif";
import snorlax from "../assets/snorlax.gif";
import pidgey from "../assets/pidgey.gif";
import rattata from "../assets/rattata.gif";

export default function MediumLevel({
  score,
  setScore,
  setBestScore,
  setCurrentRound,
  level,
  sound,
}) {
  const [pokemon, setPokemon] = useState([
    { name: "Pikachu", data: [] },
    { name: "Bulbasaur", data: [] },
    { name: "Charmander", data: [] },
    { name: "Squirtle", data: [] },
    { name: "Jigglypuff", data: [] },
    { name: "Meowth", data: [] },
    { name: "Eevee", data: [] },
    { name: "Snorlax", data: [] },
    { name: "Pidgey", data: [] },
    { name: "Rattata", data: [] },
  ]);

  const [clicked, setClicked] = useState([]);
  const [lost, setLost] = useState(false);
  const [win, setWin] = useState(false);
  const [flipAll, setFlipAll] = useState(false);

  // Fallback image map
  const fallbackImages = {
    Pikachu: pikachu,
    Bulbasaur: bulbasaur,
    Charmander: charmander,
    Squirtle: squirtle,
    Jigglypuff: jigglypuff,
    Meowth: meowth,
    Eevee: eevee,
    Snorlax: snorlax,
    Pidgey: pidgey,
    Rattata: rattata,
  };

  useEffect(() => {
    if (score === 10) {
      setWin(true);
    }
  }, [score]);

  const playSound = () => {
    const audio = new Audio(cardSound);
    audio.play();
  };
  const playBtnSound = () => {
    const audio = new Audio(btnSound);
    audio.play();
  };

  function handleCardClick(name) {
    setFlipAll(true);
    setTimeout(() => setFlipAll(false), 1000);
    sound && playSound();

    if (clicked.includes(name)) {
      setLost(true);
      setBestScore((prevBest) => (score > prevBest ? score : prevBest));
    } else {
      setClicked([...clicked, name]);
      setScore((prev) => prev + 1);
      setCurrentRound((prev) => prev + 1);

      const newArr = [...pokemon];
      newArr.splice(0, newArr.length, ...shuffleArr(newArr));
      setPokemon(newArr);
    }
  }

  function handleWinRestartBtn() {
    setScore(0);
    setBestScore(0);
    setClicked([]);
    setCurrentRound(0);
    setWin(false);
    setLost(false);
    sound && playBtnSound();
  }
  function handleLoseRestartBtn() {
    setScore(0);
    setBestScore(score);
    setClicked([]);
    setCurrentRound(0);
    setWin(false);
    setLost(false);
    sound && playBtnSound();
  }

  useEffect(() => {
    async function getPokemonData(searchedWord) {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=qIrKdYzjgTClPzFJN1QFjc8X3xeNx21F&q=${searchedWord}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        );
        const pokemonData = await response.json();
        return pokemonData.data.map((item) => item.images.original.url);
      } catch (error) {
        console.log(error);
        return []; // Return empty array on error
      }
    }

    async function fetchPokemonImages() {
      const updatedPokemon = await Promise.all(
        pokemon.map(async (item) => ({
          name: item.name,
          data: await getPokemonData(item.name),
        }))
      );
      setPokemon(updatedPokemon);
    }

    fetchPokemonImages();
  }, []);

  return (
    <div className="flex justify-center items-center gap-8 flex-wrap">
      {win ? (
        <div
          className="h-95 w-180 bg-no-repeat bg-cover shadow-[0px_9px_30px_-6px_#00A63E] rounded-4xl"
          style={{ backgroundImage: `url(${winImg})` }}
        >
          <div className="bg-[rgba(123,255,70,0.41)] h-95 flex flex-col justify-between items-center p-5 rounded-4xl">
            <div className="text-white text-3xl bg-green-600 rounded-3xl h-15 w-50 flex justify-center items-center">
              You Win!
            </div>
            <button
              className="bg-white text-3xl font-bold h-13 w-34 rounded-2xl shadow-[0px_9px_18px_-6px_#000000] hover:scale-[1.2] active:translate-y-[5px]"
              onClick={handleWinRestartBtn}
            >
              Restart
            </button>
          </div>
        </div>
      ) : lost ? (
        <div
          className="h-95 w-180 bg-no-repeat bg-cover shadow-[0px_9px_30px_-6px_#fc0303] rounded-4xl"
          style={{ backgroundImage: `url(${loseImg})` }}
        >
          <div className="bg-[rgba(255,70,70,0.41)] h-95 flex flex-col justify-between items-center p-5 rounded-4xl">
            <div className="text-white text-3xl bg-red-600 rounded-3xl h-15 w-50 flex justify-center items-center">
              You Lose!
            </div>
            <button
              className="bg-red-600 text-3xl font-bold h-13 w-34 rounded-2xl shadow-[0px_9px_18px_-6px_#000000] hover:scale-[1.2] active:translate-y-[5px]"
              onClick={handleLoseRestartBtn}
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        pokemon.map((item, index) => {
          const randomImage =
            item.data && item.data.length > 0
              ? item.data[
                  Math.floor(Math.random() * Math.min(5, item.data.length))
                ]
              : fallbackImages[item.name];

          return (
            <Card
              key={index}
              data={randomImage}
              pokemonName={item.name}
              onClick={() => handleCardClick(item.name)}
              level={level}
              triggerFlip={flipAll}
            />
          );
        })
      )}
    </div>
  );
}
