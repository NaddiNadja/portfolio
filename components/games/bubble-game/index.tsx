import React from "react";
import styled from "styled-components";
import { Column } from "components/containers";
import { getRandomBoard, isBoardEmpty, myBoard } from "./logic/util";
import { board, coord } from "./logic/util/types";
import { checkForEnd } from "./logic/game";
import { simulate } from "./logic/solution";
import Overlay from "../overlay";
import BubbleGameSolution from "./show-solution";
import BubbleGamePlay from "./play";

const Container = styled(Column)`
  position: relative;
`;

export const BubbleGameContext = React.createContext<{
  board: board;
  setBoard: React.Dispatch<React.SetStateAction<board>>;
  endMessage?: string;
  setEndMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}>({
  board: myBoard,
  setBoard: () => {},
  setEndMessage: () => {},
});

const BubbleGame: React.FC = () => {
  const [board, setBoard] = React.useState<board>(myBoard);
  const [endMessage, setEndMessage] = React.useState<string>();
  const [showSolution, setShowSolution] = React.useState(false);
  const [solutionMoves, setSolutionMoves] = React.useState<coord[]>([]);

  React.useEffect(() => {
    setBoard(getRandomBoard());
  }, []);

  const resetBoard = () => {
    setBoard(getRandomBoard());
    setEndMessage(undefined);
    setShowSolution(false);
  };

  const handleShowSolution = () => {
    const moves = simulate(board);
    if (moves) {
      setShowSolution(prev => !prev);
      setSolutionMoves(moves);
    } else if (moves === null) {
      setEndMessage("Calculating the solution took too long :(");
    } else {
      setEndMessage("No valid solution :(");
    }
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
    <BubbleGameContext.Provider
      value={{ board, setBoard, endMessage, setEndMessage }}
    >
      <Container>
        {endMessage && <Overlay message={endMessage} onClick={resetBoard} />}
        {showSolution ? (
          <BubbleGameSolution moves={solutionMoves} />
        ) : (
          <BubbleGamePlay onShowSolution={handleShowSolution} />
        )}
      </Container>
    </BubbleGameContext.Provider>
  );
};

export default BubbleGame;
