import React, { useState, useEffect } from "react";
import Card from "./Card";
import { shuffleArr } from "../utils";
import loseImg from "../assets/lose.jpg";
import WinImg from "../assets/win.jpeg";

export default function MediumLevel({
  score,
  setScore,
  setBestScore,
  setCurrentRound,
}) {
  const [pokemon, setPokemon] = useState([
    { name: "Pikachu", data: [] },
    { name: "Bulbasaur", data: [] },
    { name: "Charmander", data: [] },
    { name: "Squirtle", data: [] }, 
  ]);
  const [clicked, setClicked] = useState([]);
  const [lost, setLost] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (score === 4) {
      setWin(true);
    }
  }, [score]);

  function handleCardClick(name) {
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

  function handleRestartBtn() {
    setScore(0);
    setBestScore(0);
    setClicked([]);
    setCurrentRound(0);
    setWin(false);
    setLost(false);
  }

  useEffect(() => {
    async function getPokemonData(searchedWord) {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=qIrKdYzjgTClPzFJN1QFjc8X3xeNx21F&q=${searchedWord}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        );
        const pokemonData = await response.json();
        return pokemonData.data[0].images.original.url;
      } catch (error) {
        console.log(error);
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
    <div className="flex gap-8 flex-wrap justify-center">
      {win ? (
        <div
          className="h-95 w-180 bg-no-repeat bg-cover shadow-[0px_9px_30px_-6px_#00A63E] rounded-4xl"
          style={{ backgroundImage: `url(${WinImg})` }}
        >
          <div className="bg-[rgba(123,255,70,0.41)] h-95 flex flex-col justify-between items-center p-5 rounded-4xl">
            <div className="text-white text-3xl bg-green-600 rounded-3xl h-15 w-50 flex justify-center items-center">
              You Win!
            </div>
            <button
              className="bg-white text-3xl font-bold h-13 w-34 rounded-2xl shadow-[0px_9px_18px_-6px_#000000] hover:scale-[1.2] active:translate-y-[5px]"
              onClick={handleRestartBtn}
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
              onClick={handleRestartBtn}
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        pokemon.map((item, index) => (
          <Card
            key={index}
            data={item.data}
            pokemonName={item.name}
            onClick={() => handleCardClick(item.name)}
          />
        ))
      )}
    </div>
  );
}
