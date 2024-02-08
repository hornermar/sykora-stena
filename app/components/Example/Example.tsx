"use client";
import { Cell } from "@/app/types/General";
import { getColourDensity } from "@/app/utils/getColorDensity";
import { getElements } from "@/app/utils/getElements";
import { getSlicedGrid } from "@/app/utils/getSlicedGrid";
import { Box, Stack } from "@mui/material";
import { map, size } from "lodash";
import { useMemo, useState } from "react";
import { Card } from "../common/Card";
import { SectionTitle } from "../common/SectionTitle";
import { Structure } from "../Structure/Structure";
import { GridSwitch } from "../common/Switch";
import { ExampleDescription } from "./Description/Description";
import { Collapse } from "../common/Collapse";

type ExampleProps = {
    defaultGrid: string[][];
    color: string;
};

export const cellsToProcess = ["0", "+", "-"];

export const Example = ({ defaultGrid, color }: ExampleProps) => {
    const smallGrid = defaultGrid.slice(0, 11);
    const form = {
        coefficient: 0.8,
        rule: 0,
    };

    const grid = useMemo(
        () => getElements(form.rule, form.coefficient, smallGrid),
        [form.rule, form.coefficient, smallGrid]
    );

    const [activeCell, setActiveCell] = useState<Cell>({ x: 7, y: 0 });
    const [displayText, setDisplayText] = useState(true);

    const onCellClick = (x: number, y: number) => {
        cellsToProcess.includes(defaultGrid[y][x]) && setActiveCell({ x, y });
    };

    const slicedGrid = useMemo(
        () => getSlicedGrid(grid, defaultGrid, activeCell),
        [grid, defaultGrid, activeCell]
    );

    const group = useMemo(
        () =>
            getColourDensity(
                slicedGrid,
                activeCell.x,
                activeCell.y,
                form.coefficient
            ),
        [slicedGrid, activeCell, form.coefficient]
    );

    const averageSteps = useMemo(() => size(group.description), [group]);

    const activeNeighbours = useMemo(
        () =>
            map(
                group.description[averageSteps - 1].neighbours,
                (neighbour) => neighbour.position
            ),
        [group, averageSteps]
    );

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
            </Card>

            <Card color="white" sx={{ position: "relative" }}>
                <Stack sx={{ padding: "15px" }}>
                    <Structure
                        grid={slicedGrid}
                        defaultGrid={defaultGrid}
                        cellType={displayText ? "text" : "image"}
                        onCellClick={onCellClick}
                        activeCell={activeCell}
                        activeNeighbours={activeNeighbours}
                        color={color}
                    />

                    <Box sx={{ position: "absolute", bottom: 50 }}>
                        <Collapse>
                            <Stack flexDirection="row" alignItems="center">
                                <span>
                                    Koeficient:&nbsp;{form.coefficient}
                                    &nbsp;Pravidlo:&nbsp;
                                    {form.rule}
                                </span>
                                <GridSwitch
                                    sx={{ marginLeft: "20px" }}
                                    checked={!displayText}
                                    onChange={() =>
                                        setDisplayText((prev) => !prev)
                                    }
                                />
                            </Stack>
                        </Collapse>
                    </Box>
                </Stack>
            </Card>

            <ExampleDescription
                grid={slicedGrid}
                cell={activeCell}
                coefficient={form.coefficient}
                rule={form.rule}
                defaultGrid={defaultGrid}
                group={group}
            />
        </>
    );
};
