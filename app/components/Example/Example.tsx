"use client";
import { Cell } from "@/app/types/General";
import { getElements } from "@/app/utils/getElements";
import { getSlicedGrid } from "@/app/utils/getSlicedGrid";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Card } from "../Card";
import { InputsLabel } from "../InputsLabel";
import { SectionTitle } from "../SectionTitle";
import { Structure } from "../Structure";
import { Switch } from "../Switch";
import { ExampleDescription } from "./Description/Description";

type ExampleProps = {
    defaultGrid: string[][];
    color: string;
};

export const cellsToProcess = ["0", "+", "-"];

export const Example = ({ defaultGrid, color }: ExampleProps) => {
    const [grid, setGrid] = useState<string[][]>(defaultGrid);
    const [activeCell, setActiveCell] = useState<Cell>({ x: 7, y: 0 });
    const [displayText, setDisplayText] = useState(true);

    const coefficient: number = 0.5;
    const rule: number = 0;

    useEffect(() => {
        setGrid(getElements(rule, coefficient, defaultGrid));
    }, [coefficient, rule]);

    const onCellClick = (x: number, y: number) => {
        cellsToProcess.includes(defaultGrid[y][x]) && setActiveCell({ x, y });
    };

    const slicedGrid = getSlicedGrid(grid, defaultGrid, activeCell);

    return (
        <>
            <Card color={color}>
                <SectionTitle letter="C." title="Příklad" />
                <p>
                    Člověk se v popisu algortitmu může lehko ztratit. Pro lepší
                    pochopení algoritmu je zde příklad, jak výpočet probíhá.
                    Proklikejte si jednotlivé buňky (jen ty, které nejsou
                    podtržené - ty jsou totiž již určené) a prozkoumejte, jak
                    jsou jednotlivé prvky voleny.
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
                        grid={slicedGrid}
                        defaultGrid={defaultGrid}
                        cellType={displayText ? "text" : "image"}
                        onCellClick={onCellClick}
                        activeCell={activeCell}
                    />
                </Stack>
            </Card>
            <Card>
                <ExampleDescription
                    grid={slicedGrid}
                    cell={activeCell}
                    coefficient={coefficient}
                    rule={rule}
                    defaultGrid={defaultGrid}
                />
            </Card>
        </>
    );
};
