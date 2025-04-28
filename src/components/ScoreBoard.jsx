import React, { useState } from "react";
import { useEffect } from "react";

export default function ScoreBoard({ score, bestScore }) {
  return (
    <div className="border-2 rounded-xl p-2 h-25 flex flex-col justify-center text-3xl bg-[#2654FF] shadow-[0px_9px_18px_-6px_#000000]">
      <div>Score:{score}</div>
      <div>Best Score:{bestScore}</div>
    </div>
  );
}
