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
import { ToggleButtonGroup } from "../ToggleButtonGroup";

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
                <p>
                    Nenechte se ale zmást. V době, kdy Sýkora struktury
                    vytvářel, byly pouze omezené počítačové možnosti. Počítač mu
                    tak vyjel pouze seznam elementů, které kde jsou. On si pak
                    pomocí vlastnoručn vyrobených razítek obraz převedl do
                    výsledné podoby.
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
                <Stack flexDirection="row" justifyContent="space-between">
                    <ToggleButtonGroup
                        value={displayDefaultGrid}
                        onChange={(newValue) => setDisplayDefaultGrid(newValue)}
                        buttons={[
                            {
                                label: "Zadání",
                                value: true,
                            },
                            {
                                label: "Výsledek",
                                value: false,
                            },
                        ]}
                    />

                    <ToggleButtonGroup
                        value={displayText}
                        onChange={(newValue) => setDisplayText(newValue)}
                        buttons={[
                            {
                                label: "Text",
                                value: true,
                            },
                            {
                                label: "Obraz",
                                value: false,
                            },
                        ]}
                    />

                    <ToggleButtonGroup
                        value={form.isRandom}
                        onChange={(newValue) =>
                            setForm((prev) => ({
                                ...prev,
                                isRandom: newValue,
                            }))
                        }
                        buttons={[
                            {
                                label: "Random",
                                value: true,
                            },
                            {
                                label: "Algoritmus",
                                value: false,
                            },
                        ]}
                    />
                </Stack>

                <Stack sx={{ marginTop: "35px" }}>
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
                                label={`${rule.code}:\u00A0${rule.text}`}
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
            <Card>
                <p>
                    V 70. letech od tvorby struktur Sýkora ustoupil a začal s
                    liniemi, protože mu to přišlo příliš omezující. V liniích je
                    totiž více náhody.
                </p>
            </Card>
        </>
    );
};
