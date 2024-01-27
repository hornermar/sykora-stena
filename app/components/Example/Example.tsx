"use client";
import { Cell } from "@/app/types/General";
import { getColourDensity } from "@/app/utils/getColorDensity";
import { getElements } from "@/app/utils/getElements";
import { getSlicedGrid } from "@/app/utils/getSlicedGrid";
import { Stack } from "@mui/material";
import { map, size } from "lodash";
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

    const coefficient: number = 0.8;
    const rule: number = 0;

    useEffect(() => {
        setGrid(getElements(rule, coefficient, defaultGrid));
    }, [coefficient, rule]);

    const onCellClick = (x: number, y: number) => {
        cellsToProcess.includes(defaultGrid[y][x]) && setActiveCell({ x, y });
    };

    const slicedGrid = getSlicedGrid(grid, defaultGrid, activeCell);

    const group = useMemo(
        () =>
            getColourDensity(
                slicedGrid,
                activeCell.x,
                activeCell.y,
                coefficient
            ),
        [activeCell]
    );
    const averageSteps = useMemo(() => size(group.description), [group]);

    const activeNeighbours = useMemo(() => {
        return map(
            group.description[averageSteps - 1].neighbours,
            (neighbour) => neighbour.position
        );
    }, [group]);

    return (
        <>
            <Card color={color}>
                <SectionTitle letter="C." title="Výpočet" />

                <p
                    style={{
                        marginTop: "70px",
                        marginBottom: 0,
                    }}
                >
                    Až potud vše určoval autor. V tuto chvíli přebírá zpracování
                    algoritmus, který dopočítá chybějící políčka.
                </p>
                <p>
                    V následující části můžete prozkoumat, jak algoritmus
                    funguje. V popisu takového algoritmu se ale člověk může
                    lehko ztratit. Proklikejte si proto jednotlivé buňky (ty
                    nepodtržené!) a uvidíte , jak takový výpočet v konkrétním
                    případě probíhá.
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
                        color={color}
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
