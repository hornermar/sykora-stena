import { elementList } from "@/app/lib/elementList";
import { Cell } from "@/app/types/General";
import { getColourDensity } from "@/app/utils/getColorDensity";
import { Box, Stack } from "@mui/material";
import { filter, first, map, size } from "lodash";
import { useMemo } from "react";
import { Accordion } from "../Accordion";
import { ExampleGrid } from "../ExampleGrid";
import { ExampleDescription } from "./Description";

type ExampleDesriptionsProps = {
    grid: string[][];
    cell: Cell;
    coefficient: number;
    defaultGrid: string[][];
};

export const ExampleDescriptions = ({
    grid,
    cell,
    coefficient,
    defaultGrid,
}: ExampleDesriptionsProps) => {
    const group = getColourDensity(grid, cell.x, cell.y, coefficient);

    const cellContent = useMemo(() => {
        return defaultGrid[cell.y][cell.x];
    }, [cell]);

    const options = filter(
        elementList,
        ({ colorDensity }) => colorDensity === group.result
    );

    const steps = size(group.description);

    return (
        <Stack>
            <Box sx={{ marginBottom: "15px" }}>
                {map(group.description, (d, index) => {
                    const neighboursGroup = map(d.neighbours, (n) =>
                        Number(n.slice(0, 1))
                    ).filter(Boolean);

                    return (
                        <Accordion
                            defaultExpanded={steps === 1 || steps === d.step}
                            summary={`Okolí ${d.step}`}
                            key={d.step}
                        >
                            <ExampleDescription
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
                                <ExampleDescription
                                    label={`Zohlednění koeficientu (v buňce je znaménko ${cellContent})`}
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
                                    Protože výsledek není jednoznačný, je
                                    potřeba prohledat širší okolí.
                                </div>
                            )}
                        </Accordion>
                    );
                })}
            </Box>

            <ExampleDescription
                label="Nejbližší skupina"
                value={group.result.toString()}
                isInLine
            />
            <ExampleGrid
                grid={[map(options, (option) => option.name)]}
                displayName
                size={40}
                sx={{
                    justifyContent: "flex-start",
                    gap: "10px",
                    marginTop: "5px",
                }}
            />

            {/* <p>Pravidlu odpovídá jeden prvek: </p>
                <p>Pravidlu odpovídají: ... </p>
                <p>
                    Pravidlu neodpovídají žádné prvky. Proto ze skupiny vybírá
                    náhodně
                </p> */}
        </Stack>
    );
};
