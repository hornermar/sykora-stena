"use client";
import { rulesItems } from "@/app/lib/formItems";
import { getElements } from "@/app/utils/getElements";
import { getEmptyGrid } from "@/app/utils/getEmptyGrid";
import { Stack, Typography } from "@mui/material";
import { map, size } from "lodash";
import { useEffect, useState } from "react";
import { Rule } from "../../types/Rule";
import { Button } from "../Button";
import { Card } from "../Card";
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
    const [form, setForm] = useState({
        coefficient: 2,
        rule: 3,
        isRandom: false,
    });
    const [grid, setGrid] = useState(defaultGrid);
    const [displayDefaultGrid, setDisplayDefaultGrid] = useState(false);
    const [displayText, setDisplayText] = useState(false);

    useEffect(() => {
        setGrid(
            getElements(
                form.rule,
                form.coefficient,
                defaultGrid,
                undefined,
                form.isRandom
            )
        );
    }, [form.coefficient, form.rule, form.isRandom]);

    const clearGrid = () => {
        const emptyGrid = getEmptyGrid(size(defaultGrid), size(defaultGrid[0]));
        setGrid(emptyGrid);
    };

    return (
        <>
            <Card color={backgroundColor}>
                <SectionTitle letter="D." title="Playground" />
            </Card>

            <Card color={"white"}>
                {displayDefaultGrid ? (
                    <Structure grid={defaultGrid} cellType="text" />
                ) : (
                    <Structure grid={grid} cellType="image" />
                )}
            </Card>

            <Card color={backgroundColor}>
                <Button onClick={clearGrid}>Vymazat vše</Button>

                <Typography>Zadání</Typography>
                <Stack flexDirection="row">
                    <Switch
                        checked={displayDefaultGrid}
                        onChange={() => setDisplayDefaultGrid((prev) => !prev)}
                    />
                </Stack>

                <Typography>Zobrazení</Typography>
                <Switch
                    checked={displayText}
                    onChange={() => setDisplayText((prev) => !prev)}
                />

                {/* on/off algoritmus */}
                <Typography>Algoritmus</Typography>
                <Stack flexDirection="row">
                    <Switch
                        checked={!form.isRandom}
                        onChange={() =>
                            setForm((prev) => ({
                                ...prev,
                                isRandom: !prev.isRandom,
                            }))
                        }
                    />
                </Stack>

                <Stack sx={{ marginTop: "30px" }}>
                    <Typography sx={{ marginBottom: "-50px" }}>
                        Koeficient
                    </Typography>

                    <Slider
                        value={form.coefficient}
                        step={0.1}
                        min={0.01}
                        max={3.99}
                        disabled={form.isRandom}
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
                    width="100%"
                    sx={{ marginTop: "10px" }}
                >
                    <Typography sx={{ marginBottom: "15px" }}>
                        Pravidlo
                    </Typography>
                    {map(rulesItems, (rule: Rule) => (
                        <Stack width="100%">
                            <Chip
                                label={rule.text}
                                onClick={() =>
                                    setForm((prev) => ({
                                        ...prev,
                                        rule: rule.code,
                                    }))
                                }
                                selected={form.rule === rule.code}
                                disabled={form.isRandom}
                                key={rule.code}
                            />
                        </Stack>
                    ))}
                </Stack>
            </Card>
        </>
    );
};
