"use client";
import { Stack, SvgIcon, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { getElements } from "../utils/getElements";
import { Button } from "./Button";
import { Card } from "./Card";
import { InputsLabel } from "./InputsLabel";
import { Structure } from "./Structure";
import { Switch } from "./Switch";

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
];

type FrontPageProps = {
    color: string;
};

export const FrontPage = ({ color }: FrontPageProps) => {
    const [displayEmptyGrid, setDisplayEmptyGrid] = useState(false);

    // const coefficient = useMemo(() => getRandomCoefficient(), []);
    // const rule = useMemo(() => getRandomRule(), []);

    const coefficient = 0.5;
    const rule = 0;

    const grid = useMemo(() => {
        console.log(rule, coefficient);
        return getElements(rule, coefficient, emptyGrid);
    }, [rule, coefficient]);

    return (
        <>
            <Card color={color}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: "42px",
                        padding: "0px 0px 130px 0px",
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
                    }}
                >
                    Algoritmus Zdeňka Sýkory pro tvorbu černobílých struktur.
                </Typography>

                <Stack flexDirection="row" justifyContent="flex-end">
                    <Switch
                        checked={!displayEmptyGrid}
                        onChange={() => setDisplayEmptyGrid((prev) => !prev)}
                    />
                </Stack>
            </Card>

            <Card>
                <Stack sx={{ position: "relative", margin: "30px 0 20px 0" }}>
                    <InputsLabel
                        coefficient={coefficient}
                        rule={rule}
                        display={displayEmptyGrid}
                    />
                    <Structure
                        grid={displayEmptyGrid ? emptyGrid : grid}
                        cellType={displayEmptyGrid ? "text" : "image"}
                    />
                </Stack>
            </Card>

            <Card color="white">
                <div>
                    <p style={{ marginTop: "0" }}>
                        V roce 1961 začal Zdeněk Sýkora vytvářet obrazy
                        gemetrického abstraktního typu. Jejich kompozice byla
                        výsledkem opakovaného použití jednoho nebo více
                        základních prvků. Tyto prvky se vyznačovaly tvarem
                        (čtvercovým nebo obdélníkovým) a specifickými
                        geometrickými vzory uvnitř.
                    </p>
                    <p>
                        Při zvažování dalších pravidel pro tvorbu kompozic z
                        daných prvků si ale uvědomil, že člověk naráží na
                        kompinatorické složitosti, které lze snadněji vyřešit
                        pomocí počítače.
                    </p>
                    <p>
                        Obrátil se proto na matematika Jaroslava Blažka, se
                        kterým připravili program, který počítal prvky v obraze
                        předem zadaných pravidel. Jak algoritmus fungoval
                        popsali v článku Computer-aided multielement geometrical
                        abstract paintings v časopise Leonardo z roku 1970.
                    </p>

                    <div style={{ paddingTop: "10px" }}>
                        <Button
                            // onClick={() => {
                            //     window.location.href = "/algoritmus";
                            // }}

                            // onClick go to id PlayGround
                            onClick={() => {
                                window.location.href = "/#playground";
                            }}
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
                    </div>
                </div>
            </Card>
        </>
    );
};
