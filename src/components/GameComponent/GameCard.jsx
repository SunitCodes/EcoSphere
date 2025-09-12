import React from "react";
import { Link } from "react-router-dom";
import trashposter from "/assets/trashposter.png";
import savetheforestposter from "/assets/savetheforestposter.png"
import ocean from "/assets/ocean.png"
import electricity from "/assets/electricity.png"

const GameCard = () => {
  const GAME_DATA = [
    {
      id: "01",
      label: "Trash Sorter",
      img: trashposter,
      path: "/games/trash-sorting", 
    },
    {
      id: "02",
      label: "Plant a tree",
      img: savetheforestposter,
      path: "", 
    },
    {
      id: "03",
      label: "Save the Electricity",
      img: electricity,
      path: "", 
    },
    {
      id: "04",
      label: "Clean the Ocean",
      img: ocean,
      path: "", 
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {GAME_DATA.map((game) => (
          <Link to={game.path} key={game.id}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-full aspect-[8/12] overflow-hidden">
                <img
                  src={game.img}
                  alt={game.label}
                  className="w-full h-full object-cover"
                />
              </div>
             
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameCard;
