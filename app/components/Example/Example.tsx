"use client";
import { Cell } from "@/app/types/General";
import { getColourDensity } from "@/app/utils/getColorDensity";
import { getElements } from "@/app/utils/getElements";
import { getSlicedGrid } from "@/app/utils/getSlicedGrid";
import rotateIcon from "../../../public/rotate-solid.svg";
import { map, size } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Card } from "../common/Card";
import { SectionTitle } from "../common/SectionTitle";
import { Structure } from "../Structure/Structure";
import { GridSwitch } from "../common/Switch";
import { ExampleDescription } from "./Description/Description";
import { Collapse } from "../common/Collapse";
import { getRandomCoefficient } from "@/app/utils/getRandomCoefficient";
import { getRandomRule } from "@/app/utils/getRandomRule";
import { IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

type ExampleProps = {
    defaultGrid: string[][];
    color: string;
};

export const cellsToProcess = ["0", "+", "-"];

export const Example = ({ defaultGrid, color }: ExampleProps) => {
    const [activeCell, setActiveCell] = useState<Cell>({ x: 7, y: 0 });
    const [displayText, setDisplayText] = useState(true);
    const [form, setForm] = useState({
        coefficient: 0.8,
        rule: 0,
    });
    const smallGrid = useMemo(() => defaultGrid.slice(11, 22), [defaultGrid]);

    const [grid, setGrid] = useState(smallGrid);

    const reloadInputs = useCallback(() => {
        setForm({
            coefficient: getRandomCoefficient(),
            rule: getRandomRule(),
        });
    }, []);

    useEffect(() => {
        setGrid(getElements(form.rule, form.coefficient, smallGrid));
    }, [form, smallGrid]);

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
                <Structure
                    grid={slicedGrid}
                    defaultGrid={smallGrid}
                    cellType={displayText ? "text" : "image"}
                    onCellClick={onCellClick}
                    activeCell={activeCell}
                    activeNeighbours={activeNeighbours}
                    color={color}
                />

                <Collapse expandable={false} sx={{ paddingTop: "10px" }}>
                    <Stack flexDirection="row" alignItems="center">
                        <Typography>
                            Koeficient:&nbsp;
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "40px",
                                }}
                            >
                                {form.coefficient}&nbsp;
                            </span>
                            Pravidlo:&nbsp;<span>{form.rule}</span>
                        </Typography>
                        <GridSwitch
                            sx={{ marginLeft: "20px" }}
                            checked={!displayText}
                            onChange={() => setDisplayText((prev) => !prev)}
                        />
                    </Stack>

                    <IconButton
                        color="inherit"
                        onClick={() => reloadInputs()}
                        sx={{ backgroundColor: "white !important" }}
                    >
                        <Image
                            src={rotateIcon}
                            width={20}
                            height={20}
                            alt={"arrow left icon"}
                        />
                    </IconButton>
                </Collapse>
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
