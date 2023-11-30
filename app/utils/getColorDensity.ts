import { applyCoefficient } from "./applyCoefficient";
import { getDensityAverage } from "./getDensityAverage";
import { getNeighbours } from "./getNeighbours";
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
    let step: number = 1;
    let repeat: boolean = true;
    let unRoundedResult: number = 0;

    while (repeat && step < 5) {
        const neighbours = getNeighbours(step, grid, x, y);
        const neighboursAverage: number = getDensityAverage(neighbours);
        unRoundedResult = applyCoefficient(
            grid[y][x],
            coefficient,
            neighboursAverage
        );

        repeat = unRoundedResult - Math.floor(unRoundedResult) === 0.5;
        step++;
    }

    const rounded: number = getRounded(unRoundedResult);
    return rounded;
};
