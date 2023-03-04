import { board } from "./types";

const isBoardEmpty = (board: board) => {
  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[y][x] !== 0) return false;
    }
  }
  return true;
};

export default isBoardEmpty;
