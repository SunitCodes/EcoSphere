import React from "react";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import trashposter from "/assets/trashposter.png";
import savetheforestposter from "/assets/savetheforestposter.png";
import ocean from "/assets/ocean.png";
import electricity from "/assets/electricity.png";

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
        {GAME_DATA.map((game) => {
          const Card = (
            <div
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ${
                game.path ? "cursor-pointer" : "cursor-not-allowed opacity-70"
              }`}
            >
              <div className="w-full aspect-[8/12] overflow-hidden">
                <img
                  src={game.img}
                  alt={game.label}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lock icon + text for locked games */}
              {!game.path && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  <div className="flex items-center gap-2 bg-gray-600 bg-opacity-40 px-3 py-1 rounded-lg">
                    <Lock className="w-5 h-5" />
                    Locked
                  </div>
                </div>
              )}
            </div>
          );

          return game.path ? (
            <Link to={game.path} key={game.id}>
              {Card}
            </Link>
          ) : (
            <div key={game.id}>{Card}</div>
          );
        })}
      </div>
    </div>
  );
};

export default GameCard;
