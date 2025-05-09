import React, { useState } from "react";
import "../styles/easyCard.css";
import "../styles/mediumCard.css";
import "../styles/hardCard.css";
import pokemonball from "../assets/pokemonball.png";

export default function Card({
  data,
  pokemonName,
  onClick,
  level,
  triggerFlip,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Capture mouse position over the card
  //start
  const handleMouseMove = (e) => {
    if (triggerFlip) return; // Disable hover effect during flip

    const { offsetX, offsetY, target } = e.nativeEvent;
    const width = target.offsetWidth;
    const height = target.offsetHeight;
    const rotateY = (offsetX / width) * 30 - 15;
    const rotateX = (offsetY / height) * 30 - 15;
    setMousePosition({ x: rotateY, y: rotateX });
  };

  return (
    <>
      {level == "easy" ? ( //easy level
        <div
          className={`card-container ${level} ${triggerFlip ? "no-hover" : ""}`}
          onClick={onClick}
          onMouseMove={handleMouseMove}
          style={{
            "--rotateY": `${mousePosition.x}deg`,
            "--rotateX": `${mousePosition.y}deg`,
          }}
        >
          <div className={`card-inner ${triggerFlip ? "flipped" : ""}`}>
            <div className="card-front">
              <img src={data} alt={pokemonName} />
              <div className="name">{pokemonName}</div>
            </div>
            <div className="card-back">
              <img src={pokemonball} alt="Back" />
            </div>
          </div>
        </div>
      ) : level == "medium" ? ( //medium level
        <div
          className={`card-container2 ${level}  ${triggerFlip ? "no-hover" : ""}`}
          onClick={onClick}
          onMouseMove={handleMouseMove}
          style={{
            "--rotateY": `${mousePosition.x}deg`,
            "--rotateX": `${mousePosition.y}deg`,
          }}
        >
          <div className={`card-inner2 ${triggerFlip ? "flipped" : ""}`}>
            <div className="card-front2">
              <img src={data} alt={pokemonName} />
              <div className="name2">{pokemonName}</div>
            </div>
            <div className="card-back2">
              <img src={pokemonball} alt="Back" />
            </div>
          </div>
        </div>
      ) : (
        //hard level
        <div
          className={`card-container3 ${level}  ${triggerFlip ? "no-hover" : ""}`}
          onClick={onClick}
          onMouseMove={handleMouseMove}
          style={{
            "--rotateY": `${mousePosition.x}deg`,
            "--rotateX": `${mousePosition.y}deg`,
          }}
        >
          <div className={`card-inner3 ${triggerFlip ? "flipped" : ""}`}>
            <div className="card-front3">
              <img src={data} alt={pokemonName} />
              <div className="name3">{pokemonName}</div>
            </div>
            <div className="card-back3">
              <img src={pokemonball} alt="Back" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
