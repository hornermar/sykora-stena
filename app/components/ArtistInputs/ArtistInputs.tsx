"use client";
import MediaCard from "../MediaCard";
import { Structure } from "../Structure";
import { Coefficient } from "./Coefficient";
import { ArtistInputsElements } from "./Elements";
import { Rule } from "./Rule";

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

            <MediaCard heading="2. Diagram" color="rgb(219, 219, 219)">
                <p>
                    Umělec si připravil mřížku, pro kterou si zvolil počet prvků
                    do výšky a šířky. Do ní pak umístil libovolný počet elementů
                    dle vlastního výběru. Do míst, kde si přál zvýšit nebo
                    naopak snížit hustotu barvy, přidal znaménka <b>+</b> a{" "}
                    <b>-</b>.
                </p>

                <p>Výsledný diagram mohl vypadat například takto:</p>

                <Structure
                    size={smallSize}
                    grid={gridForDiagram}
                    cellType="text"
                    displaySwitch
                    backgroundColor="white"
                />
            </MediaCard>
            <Coefficient grid={gridForDiagram} rule={form.rule} />
            <Rule grid={gridForDiagram} coefficient={form.coefficient} />
        </>
    );
};
