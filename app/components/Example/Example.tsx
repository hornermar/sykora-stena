"use client";
import { Cell } from "@/app/types/General";
import { getColourDensity } from "@/app/utils/getColorDensity";
import { getElements } from "@/app/utils/getElements";
import { getSlicedGrid } from "@/app/utils/getSlicedGrid";
import { Stack } from "@mui/material";
import { map } from "lodash";
import { useEffect, useMemo, useState } from "react";
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

    const coefficient: number = 0.75;
    const rule: number = 0;

    useEffect(() => {
        setGrid(getElements(rule, coefficient, defaultGrid));
    }, [coefficient, rule]);

    const onCellClick = (x: number, y: number) => {
        cellsToProcess.includes(defaultGrid[y][x]) && setActiveCell({ x, y });
    };

    const slicedGrid = getSlicedGrid(grid, defaultGrid, activeCell);

    const group = useMemo(
        () => getColourDensity(grid, activeCell.x, activeCell.y, coefficient),
        [activeCell]
    );

    const activeNeighbours = useMemo(() => {
        return map(
            group.description[0].neighbours,
            (neighbour) => neighbour.position
        );
    }, [group]);

    return (
        <>
            <Card color={color}>
                <SectionTitle letter="C." title="Výpočet" />
                <p>
                    Až potud určoval vše autor. Vyplnění prázdných políček
                    postupuje po řadách. Algoritmus vybere nejprve skupinu (1,
                    2, 3, 4) na základě skupin sousedních prvků a koeficientu.
                    Poté z ní vybere natočení (z, b, y atd.) tak, aby odpovídalo
                    zvolenému pravidlu.
                </p>
                <p>
                    Člověk se v popisu algortitmu může lehko ztratit. Pro lepší
                    pochopení algoritmu je zde příklad, jak výpočet probíhá.
                    Proklikejte si jednotlivé buňky (jen ty, které nejsou
                    podtržené - ty jsou totiž již určené) a prozkoumejte, jak
                    jsou jednotlivé prvky voleny.
                </p>
            </Card>

            <Card heading="1. Průchod diagramem">
                <p>
                    Algoritmus začíná počítat v levém horním rohu. Postupuje
                    zleva doprava v lichých řadách a zprava doleva v sudých.
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
                        activeNeighbours={activeNeighbours}
                    />
                </Stack>
            </Card>

            <ExampleDescription
                grid={slicedGrid}
                cell={activeCell}
                coefficient={coefficient}
                rule={rule}
                defaultGrid={defaultGrid}
                group={group}
            />
        </>
    );
};
