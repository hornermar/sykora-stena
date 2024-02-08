"use client";
import { rulesItems } from "@/app/lib/formItems";
import { getElements } from "@/app/utils/getElements";
import { Box, Stack, Typography } from "@mui/material";
import { map } from "lodash";
import { useEffect, useState } from "react";
import { Rule } from "../../types/Rule";
import { Card } from "../common/Card";
import { Chip } from "../common/Chip";
import { SectionTitle } from "../common/SectionTitle";
import { Slider } from "../common/Slider";
import { Structure } from "../Structure/Structure";
import { ToggleButtonGroup } from "../common/ToggleButtonGroup";
import { Collapse } from "../common/Collapse";
import { OnOffSwitch } from "../common/Switch";

type PlaygroundProps = {
    defaultGrid: string[][];
    color: string;
};

const collapseSx = {
    marginLeft: "-35px",
};

export const Playground = ({ defaultGrid, color }: PlaygroundProps) => {
    const [form, setForm] = useState({
        coefficient: 2,
        rule: 3,
    });
    const [grid, setGrid] = useState(defaultGrid);
    const [displayDefaultGrid, setDisplayDefaultGrid] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    const [isRandom, setIsRandom] = useState(false);

    useEffect(() => {
        setGrid(
            getElements(
                form.rule,
                form.coefficient,
                defaultGrid,
                undefined,
                isRandom
            )
        );
    }, [form.coefficient, form.rule, isRandom, defaultGrid]);

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

            <Card
                color={"white"}
                sx={{ position: "relative", height: "100vH" }}
            >
                <Stack
                    sx={{
                        padding: "15px",
                        height: "100%",
                        justifyContent: "center",
                    }}
                >
                    <Structure
                        grid={grid}
                        cellType={displayText ? "text" : "image"}
                        defaultGrid={defaultGrid}
                        displayDefaultGrid={displayDefaultGrid}
                    />

                    <Box sx={{ position: "absolute", top: "30vh" }}>
                        <Collapse defaultExpanded={true} sx={collapseSx}>
                            <Stack
                                flexDirection="row"
                                alignItems="center"
                                sx={{ minWidth: "250px" }}
                            >
                                <Typography sx={{ marginRight: "20px" }}>
                                    Koeficient
                                </Typography>

                                <Slider
                                    value={form.coefficient}
                                    step={0.01}
                                    min={0.01}
                                    max={3.99}
                                    disabled={isRandom}
                                    onChange={(
                                        e: Event,
                                        newValue: number | number[]
                                    ) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            coefficient: newValue as number,
                                        }))
                                    }
                                />
                            </Stack>
                        </Collapse>

                        <Collapse defaultExpanded={true} sx={collapseSx}>
                            <Stack>
                                <Stack flexDirection="row" alignItems="center">
                                    <Typography sx={{ paddingRight: "20px" }}>
                                        Pravidlo
                                    </Typography>
                                    <Stack
                                        flexDirection="row"
                                        alignItems="center"
                                        gap={1}
                                        flexWrap="nowrap"
                                    >
                                        {map(rulesItems, (rule: Rule) => (
                                            <Chip
                                                label={rule.code.toString()}
                                                onClick={() =>
                                                    setForm((prev) => ({
                                                        ...prev,
                                                        rule: rule.code,
                                                    }))
                                                }
                                                selected={
                                                    form.rule === rule.code
                                                }
                                                disabled={isRandom}
                                                key={rule.code}
                                            />
                                        ))}
                                    </Stack>
                                </Stack>
                                <span
                                    style={{
                                        fontSize: "10px",
                                        paddingTop: "3px",
                                    }}
                                >
                                    {rulesItems[form.rule].text.replaceAll(
                                        " ",
                                        "\u00A0"
                                    )}
                                </span>
                            </Stack>
                        </Collapse>

                        <Collapse defaultExpanded={true} sx={collapseSx}>
                            <Stack
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="space-between"
                                width="100%"
                            >
                                <Stack>
                                    <Typography sx={{ paddingRight: "20px" }}>
                                        Algoritmus
                                    </Typography>
                                    <span
                                        style={{
                                            fontSize: "10px",
                                            paddingTop: "3px",
                                        }}
                                    >
                                        Vypnutím&nbsp;se&nbsp;elementy&nbsp;vybírají&nbsp;náhodně
                                    </span>
                                </Stack>

                                <OnOffSwitch
                                    sx={{ marginLeft: "20px" }}
                                    checked={!isRandom}
                                    onChange={() =>
                                        setIsRandom((prev) => !prev)
                                    }
                                />
                            </Stack>
                        </Collapse>

                        <Collapse defaultExpanded={true} sx={collapseSx}>
                            <Stack flexDirection="row">
                                <Typography
                                    sx={{
                                        paddingRight: "20px",
                                        paddingTop: "8px",
                                    }}
                                >
                                    Zobrazení
                                </Typography>
                                <Stack flexWrap="nowrap">
                                    <ToggleButtonGroup
                                        value={displayDefaultGrid}
                                        onChange={(newValue) =>
                                            setDisplayDefaultGrid(newValue)
                                        }
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
                                        onChange={(newValue) =>
                                            setDisplayText(newValue)
                                        }
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
                                </Stack>
                            </Stack>
                        </Collapse>
                    </Box>
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
