// TrashSortingGame.jsx
import React, { useState, useEffect, useRef } from "react";
import "./TrashSortingGame.css";

export default function TrashSortingGame() {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentTrash, setCurrentTrash] = useState(null);
  const intervalRef = useRef(null);

  const loadTrashes = () => {
    let trashes = [];
    for (let i = 1; i <= 4; i++) {
      trashes.push({ type: "glass", src: `/assets/trash/glass/${i}.png` });
      trashes.push({ type: "hazardous", src: `/assets/trash/hazardous/${i}.png` });
      trashes.push({ type: "metal", src: `/assets/trash/metal/${i}.png` });
      trashes.push({ type: "organic", src: `/assets/trash/organic/${i}.png` });
      trashes.push({ type: "paper", src: `/assets/trash/paper/${i}.png` });
      trashes.push({ type: "plastic", src: `/assets/trash/plastic/${i}.png` });
    }
    return trashes;
  };

  const trashes = loadTrashes();

  const getRandomTrash = () => {
    let randomIndex = Math.floor(Math.random() * trashes.length);
    return trashes[randomIndex];
  };

  // Start Game
  const startGame = () => {
    setScore(0);
    setTimer(5);
    setGameOver(false);
    setGameStarted(true);
    setCurrentTrash(getRandomTrash());

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle drop on bin
  const handleDrop = (event, binType) => {
    event.preventDefault();
    if (gameOver) return;

    if (currentTrash?.type === binType) {
      setScore((prev) => prev + 1);
      setCurrentTrash(getRandomTrash());
      setTimer(6); // reset timer
    }
  };

  const handleDragOver = (event) => {
    if (!gameOver) event.preventDefault();
  };

  const handleReplay = () => {
    clearInterval(intervalRef.current);
    startGame();
  };

  return (
    <div className="container">
      <div className="game">
        {/* Start Screen */}
        {!gameStarted && !gameOver && (
          <div className="gameOver">
            <h1>Trash Sorting Game</h1>
            <p onClick={startGame} className="start-btn">Start</p>
          </div>
        )}

        {/* Game UI */}
        {gameStarted && !gameOver && (
          <>
            <div>
              <h4 className="text-2xl pt-4">Score: {score}</h4>
              <h3 className="text-xl">{timer}</h3>
            </div>

            <div className="trash">
              {currentTrash && (
                <img src={currentTrash.src} alt={currentTrash.type} draggable />
              )}
            </div>

            <div className="trashBins">
              {["glass", "hazardous", "metal", "paper", "plastic", "organic"].map(
                (binType, i) => (
                  <img
                    key={i}
                    src={`/assets/bin${i + 1}.png`}
                    alt={`${binType} bin`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, binType)}
                  />
                )
              )}
            </div>
          </>
        )}

        {/* Game Over Screen */}
        {gameOver && (
          <div className="gameOver">
            <h1>Game Over!</h1>
            <h2 className="text-3xl pt-2 text-white font-semibold">Your Score: {score}</h2>
            <p onClick={handleReplay} className="replay-btn">Replay</p>
          </div>
        )}
      </div>
    </div>
  );
}
