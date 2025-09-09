import React from 'react'
import { GAME_DATA } from "../assets/data";

const GameCard = () => {
  return (
    <div className="p-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {GAME_DATA.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="w-full aspect-[8/12] overflow-hidden">
              <img
                src={game.img}
                alt={game.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {game.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameCard