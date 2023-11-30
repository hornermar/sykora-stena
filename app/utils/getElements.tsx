import { FormValues } from "../types/FormValues";
import { getColourDensity } from "./getColorDensity";
import { getShape } from "./getShape";

export const cellsToProcess = ["0", "+", "-"];

const processCell = (
    newGrid: string[][],
    x: number,
    y: number,
    coefficient: number,
    rule: number
) => {
    // If the cell is in the cellsToGenerate array
    if (cellsToProcess.includes(newGrid[y][x])) {
        const colorDensity = getColourDensity(newGrid, x, y, coefficient);

        const element = getShape(newGrid, x, y, colorDensity, rule);

        newGrid[y][x] = element ?? "0";
    }
};

export const getElements = (form: FormValues, grid: string[][]) => {
    const { rule, coefficient, structure } = form;

    // Create a copy of the grid
    let newGrid = grid.map((row: any) => [...row]);

    // Iterate over the rows
    for (let y = 0; y < structure.rows; y++) {
        // If the row is even, iterate from left to right
        if (y % 2 === 0) {
            for (let x = 0; x < structure.columns; x++) {
                processCell(newGrid, x, y, coefficient, rule);
            }
        } else {
            // If the row is odd, iterate from right to left
            for (let x = structure.columns - 1; x >= 0; x--) {
                processCell(newGrid, x, y, coefficient, rule);
            }
        }
    }

    console.log("newGrid: ", newGrid);

    return newGrid;
};
