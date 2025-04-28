import React from "react";

export default function Btn({ name, onClick }) {
  return (
    <button
      className="border-2 font-bold rounded-lg h-10 w-20 bg-[#FFCD02] shadow-[0px_9px_18px_-6px_#000000] hover:scale-[1.2] active:translate-y-[5px] "
      onClick={onClick}
    >
      {name}
    </button>
  );
}
