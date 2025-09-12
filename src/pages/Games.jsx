import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import GameCard from "../components/GameComponent/GameCard";

const Games = () => {
  const location = useLocation();

  // Check if the current path is exactly /games, show GameCard only there
  const showGameList = location.pathname === "/games";

  return (
    <div className="p-8">
      {showGameList && <GameCard />}
      <Outlet /> {/* renders nested route */}
    </div>
  );
};

export default Games;
