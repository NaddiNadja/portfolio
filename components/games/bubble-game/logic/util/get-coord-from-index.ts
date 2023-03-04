import { coord } from "./types";

const getCoordFromIndex = (i: number) => {
  const x = i % 11;
  const y = Math.floor(i / 11);
  return { x, y } as coord;
};

export default getCoordFromIndex;
