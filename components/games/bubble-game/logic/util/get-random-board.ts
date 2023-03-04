import { ballType, board } from "./types";

const getRandomBoard = () => {
  let board: board = [];
  for (let y = 0; y < 12; y++) {
    board.push([]);
    for (let x = 0; x < 11; x++) {
      board[y].push((Math.floor(Math.random() * 4) + 1) as ballType);
    }
  }
  return board;
};

export default getRandomBoard;
