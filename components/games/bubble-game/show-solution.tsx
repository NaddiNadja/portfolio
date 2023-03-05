import React from "react";
import styled from "styled-components";
import { Row } from "components/containers";
import { getCoordFromIndex } from "./logic/util";
import { coord } from "./logic/util/types";
import { boardAfterClick } from "./logic/solution";
import Cell from "./cell";
import Board from "./board";
import { BubbleGameContext } from ".";

interface Props {
  moves: coord[];
  onPlay: () => void;
}

const ButtonRow = styled(Row)`
  justify-content: space-between;
  & > button {
    width: 50%;
  }
`;

const BubbleGameSolution: React.FC<Props> = ({ moves, onPlay }) => {
  const { board, setBoard, endMessage, setEndMessage } =
    React.useContext(BubbleGameContext);
  const [currentMove, setCurrentMove] = React.useState(0);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout>();
  const [shouldStartNextMove, setShouldStartNextMove] = React.useState(false);
  const [automatic, setAutomatic] = React.useState(false);

  React.useEffect(() => {
    if (shouldStartNextMove && moves) {
      if (currentMove <= moves.length - 1) {
        const id = setTimeout(handleNextMove, 1000);
        setTimeoutId(id);
      } else {
        clearTimeout(timeoutId);
        setTimeoutId(undefined);
        setAutomatic(false);
      }
      setShouldStartNextMove(false);
    }
  }, [shouldStartNextMove]);

  const handleNextMove = () => {
    if (currentMove <= moves.length - 1) {
      const move = moves[currentMove];
      setCurrentMove(prev => prev + 1);
      const newBoard = boardAfterClick(move.x, move.y, board);
      if (newBoard) setBoard(newBoard);
      if (automatic) {
        setShouldStartNextMove(true);
      }
      if (currentMove === moves.length - 1) {
        setEndMessage("You won!");
      }
    } else {
      clearTimeout(timeoutId);
      setTimeoutId(undefined);
    }
  };

  const handleAutomatic = () => {
    if (automatic) {
      clearTimeout(timeoutId);
      setTimeoutId(undefined);
    } else {
      handleNextMove();
      setShouldStartNextMove(true);
    }
    setAutomatic(prev => !prev);
  };

  return (
    <>
      <Board endMessage={endMessage}>
        {board.flat().map((cell, i) => {
          const { x, y } = getCoordFromIndex(i);
          return (
            <Cell
              key={i}
              i={i}
              ballType={cell}
              border={
                moves[currentMove]?.x === x && moves[currentMove]?.y === y
              }
            />
          );
        })}
      </Board>
      <ButtonRow>
        <button onClick={handleNextMove} disabled={!!endMessage || !!timeoutId}>
          Next move
        </button>
        <button onClick={handleAutomatic} disabled={!!endMessage}>
          {timeoutId ? "Stop automatic" : "Start automatic"}
        </button>
        <button onClick={onPlay} disabled={!!endMessage || !!timeoutId}>
          Go back to play
        </button>
      </ButtonRow>
    </>
  );
};

export default BubbleGameSolution;
