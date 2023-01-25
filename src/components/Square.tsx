import React from "react";

type SquareProps = {
  value: string;
  index: number;
  winner: string;
  onHandleClick: (index: number) => void;
};

const Square = ({ value, index, winner, onHandleClick }: SquareProps) => {
  const style = value === "X" ? "text-green-500" : "text-red-600";

  return (
    <div
      onClick={() => onHandleClick(index)}
      className={`h-24 p-4 border-solid border-2 rounded-lg bg-white font-fredoka text-6xl font-bold flex justify-center items-center ${style} transition duration-300 ${
        winner || value
          ? "cursor-default"
          : "hover:brightness-90 cursor-pointer"
      }`}
    >
      {value}
    </div>
  );
};

export default Square;
