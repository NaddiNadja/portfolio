import { board } from "./types";

const printBoard = (board: board) => {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(", "));
  }
  console.log();
};

export default printBoard;
