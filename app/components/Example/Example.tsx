"use client";
import { elementList } from "@/app/lib/elementList";
import { Cell } from "@/app/types/General";
import { getColourDensity } from "@/app/utils/getColorDensity";
import { getElements } from "@/app/utils/getElements";
import { Stack } from "@mui/material";
import { filter, map, size } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";
import { Structure } from "../Structure";
import { Switch } from "../Switch";

type ExampleProps = {
    defaultGrid: string[][];
};

export const cellsToProcess = ["0", "+", "-"];

export const Example = ({ defaultGrid }: ExampleProps) => {
    const [grid, setGrid] = useState<string[][]>(defaultGrid);
    const [cell, setCell] = useState<Cell>({ x: 0, y: 0 });
    const [displayText, setDisplayText] = useState(false);

    const cellContent = useMemo(() => {
        return defaultGrid[cell.y][cell.x];
    }, [cell]);

    const coefficient: number = 0.75;
    const rule: number = 2;

    useEffect(() => {
        setGrid(getElements(rule, coefficient, defaultGrid, cell));
    }, [cell]);

    const group = getColourDensity(grid, cell.x, cell.y, coefficient);

    const options = filter(
        elementList,
        ({ colorDensity }) => colorDensity === group.result
    );

    const onCellClick = (x: number, y: number) => {
        cellsToProcess.includes(defaultGrid[y][x]) && setCell({ x, y });
    };

    return (
        <>
            <Card color="rgb(250, 186, 174)">
                <SectionTitle letter="C." title="Příklad" />
                <p>
                    Člověk se v popisu algortitmu může lehko ztratit. Pro lepší
                    pochopení algoritmu je zde příklad, jak výpočet probíhá.
                    Proklikejte si jednotlivé buňky (prázdné nebo ty, které
                    obsahují + nebo -) a prozkoumejte, jak jsou jednotlivé prvky
                    voleny.
                </p>
            </Card>

            <Card color="white">
                <Stack
                    sx={{
                        ".element-70": {
                            backgroundColor: "rgb(250, 186, 174)",
                            outline: "4px solid rgb(250, 186, 174)",
                            zIndex: 100,
                        },
                        ".element-60, .element-80,  .element-71": {
                            outline: "4px solid rgb(247, 223, 130)",
                            zIndex: 10,
                        },
                        marginBottom: "30px",
                        marginTop: "50px",
                    }}
                >
                    <Structure
                        grid={grid}
                        cellType={displayText ? "text" : "image"}
                        onCellClick={onCellClick}
                    />
                </Stack>

                <Stack flexDirection="row">
                    <Switch
                        checked={!displayText}
                        onChange={() => setDisplayText((prev) => !prev)}
                    />
                </Stack>

                <p>
                    Koeficient: {coefficient}, Pravidlo: {rule}
                </p>

                {map(group.description, (d) => {
                    const neighboursGroup = map(d.neighbours, (n) =>
                        Number(n.slice(0, 1))
                    ).filter(Boolean);

                    return (
                        <>
                            {d.step > 1 && (
                                <>
                                    <div style={{ marginTop: "20px" }}>
                                        Protože výsledek končí 0,5 a tedy není
                                        jednoznačný, je potřeba prohledat širší
                                        okolí
                                    </div>
                                    <hr />
                                </>
                            )}
                            <p>krok: {d.step}</p>

                            <div>Výpočet průměru okolí</div>
                            <span>
                                (
                                {`${neighboursGroup.join(" + ")}) : ${size(
                                    neighboursGroup
                                )} = ${d.neighboursAverage}`}
                            </span>

                            {(cellContent === "+" || cellContent === "-") && (
                                <div style={{ marginTop: "10px" }}>
                                    <div>
                                        Protože je v buňce {cellContent},
                                        zohlední se koeficient
                                    </div>
                                    <span>{`${d.neighboursAverage} ${cellContent} ${coefficient} = ${d.unRoundedResult}`}</span>
                                </div>
                            )}
                        </>
                    );
                })}

                <div style={{ marginTop: "10px" }}>Nejbližší skupina: </div>
                <span>{group.result}</span>
                <div> {map(options, (o) => o.name).join(", ")}</div>

                {/* <p>Pravidlu odpovídá jeden prvek: </p>
                <p>Pravidlu odpovídají: ... </p>
                <p>
                    Pravidlu neodpovídají žádné prvky. Proto ze skupiny vybírá
                    náhodně
                </p> */}
            </Card>
        </>
    );
};
