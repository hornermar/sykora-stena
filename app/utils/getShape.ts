import { filter } from "lodash";
import { elementList } from "../lib/elementList";
import { applyRules } from "./applyRules";
import { getNeighboursWithSides } from "./getNeighboursWithSides";

export const getShape = (
    grid: string[][],
    x: number,
    y: number,
    density: number,
    rule: number
) => {
    const options = filter(
        elementList,
        ({ colorDensity }) => colorDensity === density
    );
    console.log("[y][x]: ", [x], [y]);
    const neighbours = getNeighboursWithSides(x, y, grid);

    const element = applyRules(rule, neighbours, options);

    return element?.name;
};
