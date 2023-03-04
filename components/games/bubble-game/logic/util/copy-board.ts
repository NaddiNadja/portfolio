import { board } from "./types";

const copyBoard = (board: board): board => {
  const newArray: board = [];
  for (const row of board) {
    newArray.push([...row]);
  }
  return newArray;
};

export default copyBoard;
