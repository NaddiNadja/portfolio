import React from "react";
import { getCoordFromIndex } from "./logic/util";
import { click } from "./logic/game";
import Cell from "./cell";
import Board from "./board";
import { BubbleGameContext } from ".";

interface Props {
  onShowSolution: () => void;
}

const BubbleGamePlay: React.FC<Props> = ({ onShowSolution }) => {
  const { board, setBoard, endMessage } = React.useContext(BubbleGameContext);

  const handleClick = (i: number) => () => {
    const coord = getCoordFromIndex(i);
    const newBoard = click(coord, board);
    setBoard(newBoard);
  };

  return (
    <>
      <Board endMessage={endMessage}>
        {board.flat().map((cell, i) => (
          <Cell
            key={i}
            i={i}
            ballType={cell}
            onClick={cell === 0 || endMessage ? undefined : handleClick(i)}
          />
        ))}
      </Board>
      <button onClick={onShowSolution} disabled={!!endMessage}>
        Calculate solution
      </button>
    </>
  );
};

export default BubbleGamePlay;
