"use client";
import { ArtistInputsCoefficient } from "./Coefficient";
import { ArtistInputsDiagram } from "./Diagram";
import { ArtistInputsElements } from "./Elements";
import { ArtistInputsRule } from "./Rule";

const gridForDiagram = [
    // 1
    ["-", "-", "-", "0", "3r", "1r", "+", "+", "0", "-", "-"],
    // 2
    ["-", "1r", "+", "+", "-", "-", "-", "4z", "+", "-", "2r"],
    // 3
    ["-", "+", "+", "4i", "-", "1i", "-", "0", "0", "0", "0"],
    // 4
    ["-", "+", "+", "+", "-", "-", "-", "3b", "+", "+", "0"],
    // 5
    ["1z", "0", "0", "0", "-", "1d", "-", "+", "+", "0", "-"],
    // 6
    ["-", "+", "+", "0", "-", "-", "1y", "+", "+", "+", "1d"],
    // 7
    ["-", "+", "4z", "+", "1r", "-", "-", "0", "+", "0", "-"],
    // 8
    ["0", "+", "+", "+", "0", "-", "-", "3b", "0", "-", "-"],
    // 9
    ["+", "+", "+", "1d", "0", "-", "-", "+", "+", "4r", "-"],
    // 10
    ["+", "0", "3b", "+", "0", "0", "1r", "+", "+", "0", "-"],
];

const smallSize = 30;

const form = {
    rule: 3,
    coefficient: 0.75,
};

export const ArtistInputs = () => {
    return (
        <>
            <ArtistInputsElements />

            <ArtistInputsDiagram grid={gridForDiagram} />
            <ArtistInputsCoefficient grid={gridForDiagram} rule={form.rule} />
            <ArtistInputsRule
                grid={gridForDiagram}
                coefficient={form.coefficient}
            />
        </>
    );
};
