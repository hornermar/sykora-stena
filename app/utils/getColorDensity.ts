import { getCoefficient } from "./getCoefficient";
import { getDensityAverage } from "./getDensityAverage";
import { getExpandedNeighbours } from "./getNeighbours";
import { getRounded } from "./getRounded";

/* 
  The deterimination of the color density is based on an averaging procedure, 
  emloying the known color densities (assigned or calculated) of all elements 
  whose sides or corners touch.
*/
export const getColourDensity = (
 grid: string[][],
 x: number,
 y: number,
 coefficient: number
) => {
 let round: number = 1;
 let repeat: boolean = true;
 let unRoundedResult: number = 0;

 while (repeat && round < 5) {
  const neighbours = getExpandedNeighbours(round, grid, x, y);
  const neighboursAverage: number = getDensityAverage(neighbours);
  unRoundedResult = getCoefficient(grid[y][x], coefficient, neighboursAverage);

  repeat = unRoundedResult - Math.floor(unRoundedResult) === 0.5;
  round++;
 }

 console.log("unRoundedResult", unRoundedResult);

 const rounded: number = getRounded(unRoundedResult);
 return rounded.toString();
};
