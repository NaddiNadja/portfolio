import { isBoardEmpty, touchedTemplate, copyBoard } from "./util";
import { ballType, board, coord } from "./util/types";
import { click } from "./game";

const findMatchesWithTouch = (
  x: number,
  y: number,
  ballType: ballType,
  touched: boolean[][],
  board: board
) => {
  const matches: coord[] = [];
  const check = (x: number, y: number) => {
    if (x < 0 || x >= board[0].length) return;
    if (y < 0 || y >= board.length) return;
    if (touched[y][x]) return;
    if (board[y][x] === ballType) {
      matches.push({ x, y });
      touched[y][x] = true;
      if (x < board[0].length - 1) check(x + 1, y);
      if (x > 0) check(x - 1, y);
      if (y < board.length - 1) check(x, y + 1);
      if (y > 0) check(x, y - 1);
    }
  };
  check(x, y);
  return matches;
};

const findAllValidMoves = (board: board) => {
  let moves: coord[] = [];
  let touched: boolean[][] = touchedTemplate();
  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[y][x] === 0 || touched[y][x]) {
        continue;
      }
      const ballType = board[y][x];
      const matches = findMatchesWithTouch(x, y, ballType, touched, board);
      if (matches.length >= 2) moves.push({ x, y });
    }
  }
  return moves;
};

const recursivelyPlay: any = (moves: coord[], board: board) => {
  const availableMoves = findAllValidMoves(board);
  if (availableMoves.length === 0) {
    if (isBoardEmpty(board)) {
      return moves;
    }
    return undefined;
  }
  for (const move of availableMoves) {
    let boardCopy = copyBoard(board);
    click({ x: move.x, y: move.y }, boardCopy);
    let newMoves = recursivelyPlay([...moves, move], boardCopy);
    if (!!newMoves) return newMoves;
  }
  return undefined;
};

export const simulate = (board: board) => {
  let moves = recursivelyPlay([], board);
  return moves;
};
