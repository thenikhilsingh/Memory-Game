import React, { useState } from "react";
import EasyLevel from "./EasyLevel";

export default function TotalRounds({ currentRound, totalRounds }) {
  return (
    <div className="font-bold text-4xl text-[white]">
      {currentRound} / {totalRounds}
    </div>
  );
}

