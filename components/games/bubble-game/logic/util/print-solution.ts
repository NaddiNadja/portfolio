import { coord } from "./types";

const printSolution = (moves: coord[]) => {
  for (let i = 0; i < moves.length; i++) {
    console.log(moves[i]);
  }
};

export default printSolution;
