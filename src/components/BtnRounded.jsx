import React from "react";

export default function BtnRounded({ name, onClick }) {
  return (
    <button
      className=" text-lg flex justify-center items-center border-2 font-bold rounded-full p-3 w-10 h-10 bg-[#FFCD02] shadow-[0px_9px_18px_-6px_#000000] hover:scale-[1.2] active:translate-y-[5px]"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
