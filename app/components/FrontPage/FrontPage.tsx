"use client";
import { Box, SvgIcon, Typography } from "@mui/material";
import { Collapse } from "../common/Collapse";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getElements } from "../../utils/getElements";
import { getRandomCoefficient } from "../../utils/getRandomCoefficient";
import { getRandomRule } from "../../utils/getRandomRule";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Structure } from "../Structure/Structure";
import { GridSwitch } from "../common/Switch";
import { useSwitch } from "@/app/hooks/useSwitch";
import { FrontPageDialog } from "./Dialog";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import infoIcon from "../../../public/circle-info-solid.svg";
import rotateIcon from "../../../public/rotate-solid.svg";

const emptyGrid = [
    ["-", "-", "-", "0", "3r", "1r"],
    // 2
    ["-", "1r", "+", "+", "-", "-"],
    // 3
    ["-", "+", "+", "4i", "-", "1i"],
    // 4
    ["-", "+", "+", "+", "-", "-"],
    // 5
    ["1z", "0", "0", "0", "-", "1d"],
    // 6
    ["-", "1r", "+", "+", "-", "-"],
];

type FrontPageProps = {
    color: string;
};

export const FrontPage = ({ color }: FrontPageProps) => {
    const [displayEmptyGrid, setDisplayEmptyGrid] = useState(false);
    const [open, onOpen, onClose] = useSwitch(false);
    const [grid, setGrid] = useState(emptyGrid);
    const [form, setForm] = useState({
        coefficient: 0.75,
        rule: 1,
    });

    const reloadInputs = useCallback(() => {
        setForm({
            coefficient: getRandomCoefficient(),
            rule: getRandomRule(),
        });
    }, []);

    useEffect(() => {
        setGrid(getElements(form.rule, form.coefficient, emptyGrid));
    }, [form]);

    useEffect(() => {
        console.log(grid);
    }, [grid]);

    const scrollToPlayground = useCallback(() => {
        const element = document.getElementById("playground");
        element?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <>
            <Card
                color={color}
                sx={{
                    height: "45vh",
                    maxHeight: "400px",
                }}
            >
                <Stack justifyContent="space-between" height="100%">
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: "42px",
                            fontWeight: "400",
                        }}
                    >
                        Systém Sýkora
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "400",
                            paddingBottom: "16px",
                        }}
                    >
                        Algoritmus Zdeňka Sýkory pro tvorbu černobílých
                        struktur.
                    </Typography>
                </Stack>
            </Card>

            <Card>
                <Structure
                    grid={displayEmptyGrid ? emptyGrid : grid}
                    cellType={displayEmptyGrid ? "text" : "image"}
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
                            checked={!displayEmptyGrid}
                            onChange={() =>
                                setDisplayEmptyGrid((prev) => !prev)
                            }
                        />
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
                    </Stack>
                </Collapse>
            </Card>

            <Card color="white">
                <div>
                    <p style={{ marginTop: "0" }}>
                        Zdeněk Sýkora začal v roce 1961 vytvářet geometrické
                        abstraktní obrazy. Jejich kompozice byla výsledkem
                        opakovaného použití jednoho nebo více základních
                        elementů. Tyto elementy se vyznačovaly tvarem
                        (čtvercovým nebo obdélným) a geometrickými vzory uvnitř.
                    </p>
                    <p>
                        Při zvažování pravidel pro tvorbu kompozic si ale
                        uvědomil, že naráží na kombinatorické složitosti, které
                        lze snadněji vyřešit pomocí počítače. Obrátil se proto
                        na matematika Jaroslava Blažka, který měl toho času k
                        dispozici počítač LGP-30 na svém pracovišti,
                        Matematicko-fyzikální fakultě Univerzity Karlovy. Spolu
                        tak v roce 1964 začali vytvářet program, který
                        dopočítával elementy v obraze podle předem zadaných
                        pravidel.
                    </p>

                    <Collapse expandable={false}>
                        <Stack flexDirection="row" alignItems="center">
                            Jednu ze struktur najdede i centru Prahy!
                            <IconButton
                                color="inherit"
                                onClick={onOpen}
                                sx={{ marginRight: "10px" }}
                            >
                                <Image
                                    src={infoIcon}
                                    width={20}
                                    height={20}
                                    alt={"right left arrow icon"}
                                />
                            </IconButton>
                        </Stack>
                    </Collapse>

                    <p>
                        V následujících najdete popis algoritmu. Nejprve jsou
                        vysvětleny jednotlivé vstupy, které umělec do programu
                        zadával. Poté vás provede samotným postupem, vysvětleným
                        na interaktivním příkladu. V poslední části si pak
                        můžete sami vyzkoušet, jak se výpočet chová s různými
                        parametry.
                    </p>

                    <Box sx={{ paddingTop: "10px" }}>
                        <Button
                            onClick={() => scrollToPlayground()}
                            endIcon={
                                <SvgIcon sx={{ marginLeft: "50px" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        width="14"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="#FFFFFF"
                                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                        />
                                    </svg>
                                </SvgIcon>
                            }
                        >
                            Rovnou vyzkoušet
                        </Button>
                    </Box>

                    {/* <p>
                        Zdeněk Sýkora se tak stal jedním z prvních umělců na
                        světě, který do své tvorby zapojil počítač. Nejen díky
                        tomu se stal mezinárodně uznávaným umělcem. Zároveň se
                        mu ale nikdy už nepovedlo zbavit označení "počítačový
                        umělec", i když se o to sám pokoušel.
                    </p> */}
                </div>
            </Card>

            <FrontPageDialog open={open} onClose={onClose} />
        </>
    );
};
