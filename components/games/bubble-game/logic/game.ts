import { copyBoard } from "./util";
import { ballType, board, coord } from "./util/types";

/*  findMatches() checks surrounding balls and finds the
 *  full area of matching balls.
 */
export const findMatches = (
  x: number,
  y: number,
  ballType: ballType,
  oldBoard: board
) => {
  let board = copyBoard(oldBoard);
  const matches: coord[] = [];
  const check = (x: number, y: number) => {
    if (x < 0 || x >= board[0].length) return;
    if (y < 0 || y >= board.length) return;
    if (board[y][x] === ballType) {
      matches.push({ x, y });
      board[y][x] = 0;
      check(x + 1, y);
      check(x - 1, y);
      check(x, y + 1);
      check(x, y - 1);
    }
  };
  check(x, y);
  return matches;
};

export const gravity = (board: board) => {
  for (let x = 0; x < board[0].length; x++) {
    for (let y = board.length - 1; y >= 0; y--) {
      if (board[y][x] === 0) {
        for (let y2 = y - 1; y2 >= 0; y2--) {
          if (board[y2][x] !== 0) {
            board[y][x] = board[y2][x];
            board[y2][x] = 0;
            break;
          }
        }
      }
    }
  }
  for (let x = board[0].length - 1; x >= 0; x--) {
    if (board[board.length - 1][x] === 0) {
      for (let x2 = x - 1; x2 >= 0; x2--) {
        if (board[board.length - 1][x2] !== 0) {
          for (let y = 0; y < board.length; y++) {
            board[y][x] = board[y][x2];
            board[y][x2] = 0;
          }
          break;
        }
      }
    }
  }
};

/*  click() handles the board logic for a click event.
 */
export const click = ({ x, y }: coord, oldBoard: board) => {
  const type = oldBoard[y][x];
  if (type === 0) return oldBoard;

  let board = copyBoard(oldBoard);

  const matches = findMatches(x, y, type, board);
  if (matches.length >= 2) {
    for (const match of matches) {
      board[match.y][match.x] = 0;
    }
  }

  gravity(board);
  return board;
};

export const checkForEnd = (board: board) => {
  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      const type = board[y][x];
      if (type === 0) continue;
      const matches = findMatches(x, y, type, board);
      if (matches.length >= 2) return false;
    }
  }
  return true;
};
