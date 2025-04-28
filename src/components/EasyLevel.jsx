import React, { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { shuffleArr } from "../utils";
import loseImg from "../assets/lose.jpg";
import WinImg from "../assets/win.jpeg";

export default function EasyLevel() {
  const [pokemon, setPokemon] = useState([
    { name: "Pikachu", data: [] },
    { name: "Bulbasur", data: [] },
    { name: "Charmander", data: [] },
  ]);

  function handleCardClick() {
    const newArr = [...pokemon];
    newArr.splice(0, newArr.length, ...shuffleArr(newArr));
    setPokemon(newArr);
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

    setPokemon((prev) => {
      return prev.map((item) => {
        return {
          name: item.name,
          data: getPokemonData(item.name),
        };
      });
    });

    // pokemon.forEach((item, index) => {
    //   const pokemonData = getPokemonData(item.name);
    //   setPokemon((prev) => {
    //     const newArr = [...prev];
    //     const newObj = { ...newArr[index] };
    //     newObj.data = pokemonData;
    //     newArr[index] = newObj;
    //     console.log(newArr);
    //     return newArr;
    //   });
    // })
  }, []);

  return (
    <div className="flex gap-8">
      {pokemon.map((item, index) => {
        return (
          <Card
            key={index}
            data={item.data}
            pokemonName={item.name}
            onClick={handleCardClick}
          />
        );
      })}
    </div>
  );
}
