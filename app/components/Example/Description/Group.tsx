import { elementList } from "@/app/lib/elementList";
import { Box } from "@mui/material";
import { filter, first, map, size } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { Accordion } from "../../Accordion";
import { ExampleGrid } from "../../ExampleGrid";
import { ExampleDescriptionItem } from "./Item";

type Group = {
    result: number;
    description: {
        neighbours: string[];
        neighboursAverage: number;
        step: number;
        unRoundedResult: number;
    }[];
};

type ExampleDescriptionGroupProps = {
    coefficient: number;
    group: Group;
    cellContent: string;
};

export const ExampleDescriptionGroup = ({
    coefficient,
    group,
    cellContent,
}: ExampleDescriptionGroupProps) => {
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange =
        (panel: number) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const steps = useMemo(() => size(group.description), [group]);

    const options = filter(
        elementList,
        ({ colorDensity }) => colorDensity === group.result
    );

    useEffect(() => {
        setExpanded(steps);
    }, [steps]);

    return (
        <>
            <Box sx={{ marginBottom: "15px" }}>
                {map(group.description, (d, index) => {
                    const neighboursGroup = map(d.neighbours, (n) =>
                        Number(n.slice(0, 1))
                    ).filter(Boolean);

                    return (
                        <Accordion
                            expanded={expanded === d.step}
                            onChange={handleChange(d.step)}
                            summary={`Okolí ${d.step}`}
                            key={d.step}
                        >
                            <ExampleDescriptionItem
                                label="Výpočet průměru okolí"
                                value={`${
                                    size(neighboursGroup) === 1
                                        ? first(neighboursGroup)
                                        : `(${neighboursGroup.join(" + ")})`
                                } : ${size(neighboursGroup)}  = ${
                                    d.neighboursAverage
                                }`}
                                key={`${d.step}-${index}`}
                            />

                            {(cellContent === "+" || cellContent === "-") && (
                                <ExampleDescriptionItem
                                    label={`V buňce je znaménko ${cellContent}, od průměru je proto potřeba ${
                                        cellContent === "+"
                                            ? "přičíst"
                                            : "odečíst"
                                    } koeficient ${coefficient}:`}
                                    value={`${d.neighboursAverage} ${cellContent} ${coefficient} = ${d.unRoundedResult}`}
                                />
                            )}

                            {steps > 0 && d.step !== steps && (
                                <div
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                    }}
                                >
                                    Protože výsledek není jednoznačný (končí
                                    0.5), je potřeba prohledat širší okolí.
                                </div>
                            )}
                        </Accordion>
                    );
                })}
            </Box>
            <ExampleDescriptionItem
                label="Nejbližší skupina:"
                value={group.result.toString()}
                isInLine
            />
            <label style={{ fontSize: "14px", fontWeight: "400" }}>
                Do skupiny {group.result} patří tyto elementy:
            </label>
            <ExampleGrid
                grid={[map(options, (option) => option.name)]}
                displayName
                size={30}
                sx={{
                    justifyContent: "flex-start",
                    gap: "10px",
                    marginTop: "5px",
                }}
            />
        </>
    );
};
