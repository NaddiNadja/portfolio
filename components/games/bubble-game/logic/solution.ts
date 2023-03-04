import { isBoardEmpty, copyBoard } from "./util";
import { board, coord } from "./util/types";
import { click, findMatches, gravity } from "./game";

const findAllValidMoves = (board: board): coord[] => {
  let moves: coord[] = [];
  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[y][x] === 0) {
        continue;
      }
      const ballType = board[y][x];
      const matches = findMatches(x, y, ballType, board);
      if (matches.length >= 2) moves.push({ x, y });
    }
  }
  return moves;
};

function* recursivelyPlay(moves: coord[], board: board): any {
  const availableMoves = findAllValidMoves(board);
  if (availableMoves.length === 0 && isBoardEmpty(board)) {
    yield moves;
  }
  for (const move of availableMoves) {
    let clickedBoard = click({ x: move.x, y: move.y }, board);
    yield* recursivelyPlay([...moves, move], clickedBoard);
  }
  yield undefined;
}

export const simulate = (board: board) => {
  const iter = recursivelyPlay([], board);
  const end = Date.now() + 10000;
  do {
    const { value, done } = iter.next();
    if (value || done) {
      console.log(value);
      return value;
    }
    if (end < Date.now()) {
      console.log(
        "Halted function, took longer than " + 10000 + " miliseconds"
      );
      return null;
    }
  } while (true);
};

export const boardAfterClick = (x: number, y: number, board: board) => {
  const type = board[y][x];
  if (type === 0) return;

  const matches = findMatches(x, y, type, board);
  if (matches.length >= 2) {
    for (const match of matches) {
      board[match.y][match.x] = 0;
    }
  }

  gravity(board);
  return board;
};
