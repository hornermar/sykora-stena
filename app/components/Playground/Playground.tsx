"use client";
import { rulesItems } from "@/app/lib/formItems";
import { getElements } from "@/app/utils/getElements";
import { Stack } from "@mui/material";
import { map } from "lodash";
import { useEffect, useState } from "react";
import Card from "../Card";
import { Chip } from "../Chip";
import { SectionTitle } from "../SectionTitle";
import { Slider } from "../Slider";
import { Structure } from "../Structure";
import { Switch } from "../Switch";

type PlaygroundProps = {
    defaultGrid: string[][];
};

const backgroundColor = "rgb(247, 223, 130)";

export const Playground = ({ defaultGrid }: PlaygroundProps) => {
    const [form, setForm] = useState({ coefficient: 2, rule: 3 });
    const [grid, setGrid] = useState(defaultGrid);
    const [displayDefaultGrid, setDisplayDefaultGrid] = useState(false);

    useEffect(() => {
        setGrid(getElements(form.rule, form.coefficient, defaultGrid));
    }, [form.coefficient, form.rule]);

    return (
        <>
            <Card color={backgroundColor}>
                <SectionTitle letter="C." title="Playground" />
            </Card>

            <Card color={"white"}>
                {displayDefaultGrid ? (
                    <Structure grid={defaultGrid} cellType="text" />
                ) : (
                    <Structure grid={grid} cellType="image" />
                )}
            </Card>

            <Card color={backgroundColor}>
                <Stack flexDirection="row">
                    <Switch
                        checked={!displayDefaultGrid}
                        onChange={() => setDisplayDefaultGrid((prev) => !prev)}
                    />
                </Stack>

                <Stack sx={{ marginTop: "30px" }}>
                    {/* <Typography sx={{ marginBottom: "-50px" }}>
                        Koeficient
                    </Typography> */}

                    <Slider
                        value={form.coefficient}
                        step={0.1}
                        min={0.01}
                        max={3.99}
                        onChange={(e: Event, newValue: number | number[]) =>
                            setForm((prev) => ({
                                ...prev,
                                coefficient: newValue as number,
                            }))
                        }
                    />
                </Stack>

                <Stack
                    flexDirection="row"
                    flexWrap="wrap"
                    sx={{ marginTop: "10px" }}
                >
                    {/* <Typography sx={{ marginBottom: "15px" }}>
                        Pravidlo
                    </Typography> */}
                    {map(rulesItems, (rule: Rule) => (
                        <Chip
                            label={rule.text}
                            onClick={() =>
                                setForm((prev) => ({
                                    ...prev,
                                    rule: rule.code,
                                }))
                            }
                            selected={form.rule === rule.code}
                            key={rule.code}
                        />
                    ))}
                </Stack>
            </Card>
        </>
    );
};
