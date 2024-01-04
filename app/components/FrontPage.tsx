"use client";
import { Typography } from "@mui/material";
import { map } from "lodash";
import { getElements } from "../utils/getElements";
import { Button } from "./Button";
import Card from "./Card";
import { Structure } from "./Structure";

export const FrontPage = () => {
    const emptyGrid = [
        ["3z", "0", "+", "0", "-", "0"],
        ["+", "0", "+", "0", "-", "0"],
        ["+", "0", "+", "0", "-", "0"],
        ["+", "0", "+", "0", "-", "0"],
        ["+", "0", "+", "0", "-", "0"],
    ];

    const grid = getElements(3, 0.75, emptyGrid);

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: "46px",
                    padding: "60px 16px 0 16px",
                    fontWeight: "400",
                }}
            >
                Zdeněk Sýkora:
            </Typography>
            <div style={{ padding: "0 16px", fontWeight: "400" }}>
                {map(
                    ["Algoritmus", "pro tvorbu", "černobílých", "struktur"],
                    (word: string, index) => (
                        <Typography
                            variant="h2"
                            key={index}
                            sx={{
                                fontSize: "46px",
                                fontWeight: "400",
                            }}
                        >
                            {word}
                        </Typography>
                    )
                )}
            </div>

            <Card color="white">
                <div>
                    <Structure grid={grid} cellType="image" displaySwitch />
                    <p>
                        V roce 1961 začal Zdeněk Sýkora vytvářet obrazy
                        gemetrického abstraktního typu. Jejich kompozice byla
                        výsledkem opakovaného použití jednoho nebo více
                        záklafních prvků. Tyto prvky se vyznačovaly tvarem
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
                            onClick={() => {
                                window.location.href = "/algoritmus";
                            }}
                            fullWidth
                        >
                            Vyzkoušet
                        </Button>
                    </div>
                </div>
            </Card>

            <Card color="transparent">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. //
                    Nullam justo enim, consectetuer nec, ullamcorper ac, //
                    vestibulum in, elit.
                </p>
            </Card>
        </>
    );
};
