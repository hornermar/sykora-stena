"use client";
import { rulesItems } from "@/app/lib/formItems";
import { getElements } from "@/app/utils/getElements";
import { Stack, Typography } from "@mui/material";
import { map } from "lodash";
import { useEffect, useState } from "react";
import { Rule } from "../../types/Rule";
import { Card } from "../Card";
import { Chip } from "../Chip";
import { SectionTitle } from "../SectionTitle";
import { Slider } from "../Slider";
import { Structure } from "../Structure";
import { Switch } from "../Switch";

type PlaygroundProps = {
    defaultGrid: string[][];
    color: string;
};

export const Playground = ({ defaultGrid, color }: PlaygroundProps) => {
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
    }, [form.coefficient, form.rule, form.isRandom, defaultGrid]);

    return (
        <>
            <Card color={color}>
                <SectionTitle letter="D." title="Playground" />
                <p
                    style={{
                        marginTop: "70px",
                        marginBottom: 0,
                    }}
                >
                    Tady si můžete vyzkoušet, jak jednotlivé parametry ovlivňují
                    výsledný obraz.
                </p>
            </Card>

            <Card color={"white"}>
                <Structure
                    grid={displayDefaultGrid ? defaultGrid : grid}
                    cellType={displayText ? "text" : "image"}
                    defaultGrid={defaultGrid}
                />
            </Card>

            <Card color={color}>
                <table style={{ width: "100%" }}>
                    <colgroup>
                        <col style={{ width: "33%" }} />
                        <col style={{ width: "33%" }} />
                        <col style={{ width: "33%" }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>Diagram</td>
                            <td>Text/obraz</td>
                            <td>Algoritmus</td>
                        </tr>
                        <tr>
                            <td>
                                <Switch
                                    checked={displayDefaultGrid}
                                    onChange={() =>
                                        setDisplayDefaultGrid((prev) => !prev)
                                    }
                                />
                            </td>
                            <td>
                                <Switch
                                    checked={!displayText}
                                    onChange={() =>
                                        setDisplayText((prev) => !prev)
                                    }
                                />
                            </td>
                            <td>
                                <Switch
                                    checked={!form.isRandom}
                                    onChange={() =>
                                        setForm((prev) => ({
                                            ...prev,
                                            isRandom: !prev.isRandom,
                                        }))
                                    }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Stack sx={{ marginTop: "25px" }}>
                    <Typography sx={{ marginBottom: "-15px" }}>
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

                <Stack flexDirection="row" flexWrap="wrap" width="100%">
                    <Typography sx={{ marginBottom: "5px" }}>
                        Pravidlo
                    </Typography>
                    {map(rulesItems, (rule: Rule) => (
                        <Stack key={rule.code}>
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
                            />
                        </Stack>
                    ))}
                </Stack>
            </Card>
        </>
    );
};
