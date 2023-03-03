import React from "react";
import styled from "styled-components";
import { Column, Row } from "../containers";
import Cell from "./cell";

const Board = styled.div`
  max-width: 400px;
  width: 100%;
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const TicTacToeContext = React.createContext<{
  board: (0 | 1 | 2)[];
}>({ board: [0, 0, 0, 0, 0, 0, 0, 0, 0] });

const TicTacToe: React.FC = () => {
  const [board, setBoard] = React.useState<(0 | 1 | 2)[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [turn, setTurn] = React.useState(false);
  const [winner, setWinner] = React.useState<0 | 1 | 2>(0);

  const handleClick = (i: number) => () => {
    let newBoard = [...board];
    newBoard[i] = turn ? 1 : 2;
    setBoard(newBoard);
    setTurn(prev => !prev);
  };

  React.useEffect(() => {
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

    winningCombos.map(([a, b, c]) => {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
      }
    });
  }, [board]);

  const resetBoard = () => {
    setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setWinner(0);
  };

  return (
    <TicTacToeContext.Provider value={{ board }}>
      <Row>
        <Board>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <Cell
              key={i}
              i={i}
              onClick={
                winner === 0 && board[i] === 0 ? handleClick(i) : undefined
              }
            />
          ))}
        </Board>
        <Column>
          <button onClick={resetBoard}>Reset board</button>
          {winner === 1 && <p>X wins!</p>}
          {winner === 2 && <p>O wins!</p>}
        </Column>
      </Row>
    </TicTacToeContext.Provider>
  );
};

export default TicTacToe;
