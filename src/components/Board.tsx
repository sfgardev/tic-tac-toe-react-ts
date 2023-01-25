import React, { useEffect, useState } from "react";
import Square from "./Square";

const initialBoard: string[] = Array(9).fill("");
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Board = () => {
  const [board, setBoard] = useState(initialBoard);
  const [playerX, setPlayerX] = useState(true);
  const [winner, setWinner] = useState("");
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index: number) => {
    if (board[index]) return;
    if (winner) return;

    const updatedBoard = board.map((value, idx) => {
      if (index === idx) {
        return playerX ? "X" : "O";
      } else {
        return value;
      }
    });

    checkWinner(updatedBoard);

    setBoard(updatedBoard);
    setPlayerX((prev) => !prev);
  };

  const checkWinner = (board: string[]) => {
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];

      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        console.log(board[a]);
        setWinner(board[a]);
        return board[a];
      }
    }
    if (board.every((cell) => Boolean(cell)) && !winner) {
      setIsDraw(true);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner("");
    setPlayerX(true);
  };

  const style = winner === "X" ? "text-green-500" : "text-red-600";

  return (
    <>
      <h2 className="text-center font-fredoka font-bold text-slate-100 text-2xl mb-4">
        Turn: {playerX ? "X" : "O"}
      </h2>
      <div className=" w-80 mx-auto grid grid-cols-3 gap-1">
        {board.map((cell, index) => (
          <Square
            key={index}
            winner={winner}
            index={index}
            value={cell}
            onHandleClick={handleClick}
          />
        ))}
      </div>
      {isDraw && (
        <div className="text-center mt-4 font-fredoka  text-white">
          <p className="text-2xl">It's a draw</p>
          <button
            onClick={resetGame}
            className="bg-emerald-500 px-4 py-1 rounded-md mt-2 text-xl shadow-md hover:translate-y-1 duration-200"
          >
            Play again
          </button>
        </div>
      )}
      {winner && (
        <div className="text-center mt-4 font-fredoka  text-white">
          <p className="text-2xl">
            Player <span className={`${style}`}>{winner}</span> wins!
          </p>
          <button
            onClick={resetGame}
            className="bg-emerald-500 px-4 py-1 rounded-md mt-2 text-xl shadow-md hover:translate-y-1 duration-200"
          >
            Play again
          </button>
        </div>
      )}
    </>
  );
};

export default Board;
