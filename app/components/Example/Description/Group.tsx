import { elementList } from "@/app/lib/elementList";
import { Density } from "@/app/types/Density";
import { Box, Collapse } from "@mui/material";
import { filter, map, size } from "lodash";
import { useMemo } from "react";
import { Accordion } from "../../common/Accordion";
import { ExampleGrid } from "../../ExampleGrid";
import { ExampleDescriptionAverage } from "./Average";
import { ExampleDescriptionLabel } from "./Label";

type ExampleDescriptionGroupProps = {
    coefficient: number;
    group: Density;
    cellContent: string;
    expanded: boolean;
};

export const ExampleDescriptionGroup = ({
    coefficient,
    group,
    cellContent,
    expanded,
}: ExampleDescriptionGroupProps) => {
    const steps = useMemo(() => size(group.description), [group]);

    const options = filter(
        elementList,
        ({ colorDensity }) => colorDensity === group.result
    );

    return (
        <>
            <Collapse in={expanded}>
                <p>
                    Při zjišťování skupiny zkoumá algoritmus sousední elementy
                    (dotýkající se stranou i rohy) a spočítá průměr ze skupin,
                    do kterých patří.
                </p>

                {steps === 1 ? (
                    <ExampleDescriptionAverage
                        cellContent={cellContent}
                        coefficient={coefficient}
                        description={group.description[0]}
                    />
                ) : (
                    <Box sx={{ marginBottom: "15px" }}>
                        {map(group.description, (description) => {
                            return (
                                <Accordion
                                    summary={`${description.step}. okruh`}
                                    key={description.step}
                                >
                                    <ExampleDescriptionAverage
                                        cellContent={cellContent}
                                        coefficient={coefficient}
                                        description={description}
                                    />
                                    {steps > 0 &&
                                        description.step !== steps && (
                                            <div
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                Protože výsledek není
                                                jednoznačný (končí 0.5), je
                                                potřeba prohledat širší okolí.
                                            </div>
                                        )}
                                </Accordion>
                            );
                        })}
                    </Box>
                )}

                <p>
                    Nakonec vybere nejbližší skupinu (1, 2, 3 nebo 4), ze které
                    pak bude vybírat natočení.
                </p>
                <ExampleDescriptionLabel value={group.result.toString()} />

                <p>Do této skupiny patří elementy</p>
            </Collapse>

            <ExampleGrid
                grid={[map(options, (option) => option.name)]}
                displayName
                size={30}
                sx={{
                    justifyContent: "flex-start",
                    gap: "10px",
                    marginTop: "10px",
                }}
            />
        </>
    );
};
