import React from "react";

export default function Card({ data, pokemonName, onClick }) {
  return (
    <div onClick={onClick} className="h-95 w-60 rounded-2xl  bg-[#FFCD02] flex flex-col items-center justify-center pt-2">
      <div>
        <img
          className="border-2 border-[#2654FF] h-85 w-55 rounded-2xl"
          src={data}
          alt=""
        />
      </div>
      <div className=" text-[#2654FF] font-bold">{pokemonName}</div>
    </div>
  );
}
