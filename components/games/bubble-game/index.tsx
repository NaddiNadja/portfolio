import React from "react";
import styled from "styled-components";
import { Column } from "components/containers";
import { getRandomBoard, isBoardEmpty, myBoard } from "./logic/util";
import { click, checkForEnd } from "./logic/game";
import { board, coord } from "./logic/util/types";
import Overlay from "../overlay";
import Cell from "./cell";

const Container = styled(Column)`
  position: relative;
`;

const Board = styled.div`
  max-width: 700px;
  width: 100%;
  aspect-ratio: 11/12;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 5px;
  align-self: center;
  opacity: ${(p: { endMessage?: string }) => (p.endMessage ? 0.5 : 1)};
`;

const BubbleGame: React.FC = () => {
  const [board, setBoard] = React.useState<board>(myBoard);
  const [endMessage, setEndMessage] = React.useState<string>();

  React.useEffect(() => {
    setBoard(getRandomBoard());
  }, []);

  const getCoordFromIndex = (i: number) => {
    const x = i % 11;
    const y = Math.floor(i / 11);
    return { x, y } as coord;
  };

  const handleClick = (i: number) => () => {
    const coord = getCoordFromIndex(i);
    const newBoard = click(coord, board);
    setBoard(newBoard);
  };

  const resetBoard = () => {
    setBoard(getRandomBoard());
    setEndMessage(undefined);
  };

  React.useEffect(() => {
    const isEnded = checkForEnd(board);
    if (isEnded) {
      isBoardEmpty(board)
        ? setEndMessage("You won!")
        : setEndMessage("You lost!");
    }
  }, [board]);

  return (
    <Container>
      {endMessage && <Overlay message={endMessage} onClick={resetBoard} />}
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
    </Container>
  );
};

export default BubbleGame;
