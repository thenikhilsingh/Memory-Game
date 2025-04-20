import React from "react";

export default function Btn({ name, onCLick }) {
  return (
    <button
      className="border-2 font-bold rounded-lg h-10 w-20 bg-[#FFCD02] "
      onClick={onCLick}
    >
      {name}
    </button>
  );
}
