import React from "react";
import styled from "styled-components";
import { Column } from "components/containers";
import { getRandomBoard, isBoardEmpty, myBoard } from "./logic/util";
import { board, coord } from "./logic/util/types";
import { checkForEnd } from "./logic/game";
import { simulate } from "./logic/solution";
import GameOverlay from "../overlay";
import BubbleGameSolution from "./show-solution";
import BubbleGamePlay from "./play";
import AboutBubbleGame from "./about";

const RelativeColumn = styled(Column)`
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
  const [canPlayMore, setCanPlayMore] = React.useState(false);

  React.useEffect(() => {
    setBoard(getRandomBoard());
  }, []);

  const closeOverlay = () => {
    setEndMessage(undefined);
    setShowSolution(false);
    setCanPlayMore(false);
  };

  const resetBoard = () => {
    setBoard(getRandomBoard());
    closeOverlay();
  };

  const handleShowSolution = () => {
    const moves = simulate(board);
    if (moves) {
      setShowSolution(prev => !prev);
      setSolutionMoves(moves);
    } else if (moves === null) {
      setEndMessage("Calculating the solution took too long :(");
      setCanPlayMore(true);
    } else {
      setEndMessage("No valid solution :(");
    }
  };

  const handleGoToPlay = () => {
    setShowSolution(false);
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
      <RelativeColumn>
        {endMessage && (
          <GameOverlay
            message={endMessage}
            buttons={
              canPlayMore
                ? [
                    { onClick: closeOverlay, text: "Continue playing" },
                    { onClick: resetBoard, text: "Get a new board" },
                  ]
                : [{ onClick: resetBoard, text: "Get a new board" }]
            }
          />
        )}
        {showSolution ? (
          <BubbleGameSolution moves={solutionMoves} onPlay={handleGoToPlay} />
        ) : (
          <BubbleGamePlay onShowSolution={handleShowSolution} />
        )}
      </RelativeColumn>
      <AboutBubbleGame />
    </BubbleGameContext.Provider>
  );
};

export default BubbleGame;
