"use client";
import { Cell } from "@/app/types/General";
import { getElements } from "@/app/utils/getElements";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Card } from "../Card";
import { InputsLabel } from "../InputsLabel";
import { SectionTitle } from "../SectionTitle";
import { Structure } from "../Structure";
import { Switch } from "../Switch";
import { ExampleDescriptions } from "./Descriptions";

type ExampleProps = {
    defaultGrid: string[][];
};

export const cellsToProcess = ["0", "+", "-"];

export const Example = ({ defaultGrid }: ExampleProps) => {
    const [grid, setGrid] = useState<string[][]>(defaultGrid);
    const [cell, setCell] = useState<Cell>({ x: 0, y: 0 });
    const [displayText, setDisplayText] = useState(false);

    const coefficient: number = 0.5;
    const rule: number = 1;

    useEffect(() => {
        setGrid(getElements(rule, coefficient, defaultGrid, cell));
    }, [cell, coefficient, rule]);

    const onCellClick = (x: number, y: number) => {
        cellsToProcess.includes(defaultGrid[y][x]) && setCell({ x, y });
    };

    return (
        <>
            <Card color="rgb(216, 167, 192)">
                <SectionTitle letter="C." title="Příklad" />
                <p>
                    Člověk se v popisu algortitmu může lehko ztratit. Pro lepší
                    pochopení algoritmu je zde příklad, jak výpočet probíhá.
                    Proklikejte si jednotlivé buňky (prázdné nebo ty, které
                    obsahují + nebo -) a prozkoumejte, jak jsou jednotlivé prvky
                    voleny.
                </p>

                <Stack flexDirection="row" justifyContent="flex-end">
                    <Switch
                        checked={!displayText}
                        onChange={() => setDisplayText((prev) => !prev)}
                    />
                </Stack>
            </Card>

            <Card color="white">
                <Stack sx={{ position: "relative", margin: "30px 0 0px 0" }}>
                    <InputsLabel
                        coefficient={coefficient}
                        rule={rule}
                        display={true}
                    />
                    <Structure
                        grid={grid}
                        cellType={displayText ? "text" : "image"}
                        onCellClick={onCellClick}
                        activeCell={cell}
                    />
                </Stack>
            </Card>
            <Card>
                <ExampleDescriptions
                    grid={grid}
                    cell={cell}
                    coefficient={coefficient}
                    defaultGrid={defaultGrid}
                />
            </Card>
        </>
    );
};
