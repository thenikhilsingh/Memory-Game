import React from "react";

export default function BtnRounded({ name, onClick }) {
  return (
    <button
      className=" text-lg flex justify-center items-center border-2 font-bold rounded-full p-3 w-10 h-10 bg-[#FFCD02]"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
