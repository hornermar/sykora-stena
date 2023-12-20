"use client";
import { Stack, Switch } from "@mui/material";
import { useState } from "react";
import { ExampleGrid } from "../ExampleGrid";
import MediaCard from "../MediaCard";
import { RotatingElement } from "./RotatingElement";

const allElements = [
    ["1z", "1r", "2z", "3z", "4z", "4r"],
    ["1b", "1d", "2b", "3b", "4b", "4d"],
    ["1y", "0", "2y", "3y", "4y", "0"],
    ["1i", "0", "2r", "3r", "4i", "0"],
];

const whiteBlackElements = [
    ["4z", "4r", "2z"],
    ["4b", "4d", "2b"],
    ["4y", "0", "2y"],
    ["4i", "0", "2r"],
];

const blackWhiteElements = [
    ["1z", "1r", "3z"],
    ["1b", "1d", "3b"],
    ["1y", "0", "3y"],
    ["1i", "0", "3r"],
];

const smallSize = 45;
const largeSize = 78;

export const ArtistInputsElements = () => {
    const [whiteBlack, setWhiteBlack] = useState(false);
    const [emptydGrid, setEmptyGrid] = useState([
        ["1z", "1r", "3z"],
        ["F", "F", "F"],
        ["F", "0", "F"],
        ["F", "0", "F"],
    ]);
    const [rotation, setRotation] = useState({
        "1z": 1,
        "1r": 1,
        "3z": 1,
    });

    const addElement = (name: "1z" | "1r" | "3z", order: number) => {
        setEmptyGrid((prev) => {
            const newGrid = [...prev];
            newGrid[rotation[name]][order] =
                blackWhiteElements[rotation[name]][order];
            return newGrid;
        });
        setRotation((prev) => ({ ...prev, [name]: prev[name] + 1 }));
    };

    const addElements = (name: string) => {
        switch (name) {
            case "1z":
                rotation[name] <= 3 && addElement(name, 0);
                break;
            case "1r":
                rotation[name] <= 1 && addElement(name, 1);
                break;
            case "3z":
                rotation[name] <= 3 && addElement(name, 2);
                break;
        }
    };

    return (
        <>
            <MediaCard color="transparent">
                Ještě před spuštěním výpočtu, který provedl algoritmus, musel
                Zdeněk Sýkora nastavit <b>4</b> parametry. Na těch závisela
                výsledná podoba obrazu. V této části si ukážeme, které to jsou.
            </MediaCard>
            <MediaCard heading="1. Elementy" color="rgb(219, 219, 219)">
                <Stack spacing={4} flexDirection="column">
                    <p>
                        Nejříve musel Sýkora určit elementy, které pro danou
                        stukturu použije. Černobílá struktura je složena ze 3
                        základních obrazců. Do čtverce umístil jeden nebo dva
                        půlkruhy. Ty jsou buď za sebou nebo proti sobě. Nikdy
                        ale ne tak, aby dohromady vytvořili kruh.
                    </p>

                    <p>
                        Jejich postupným otáčením získal 10 různých elementů.
                        Prohozením barev pak tento počet zdvojnásobil na 20.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <RotatingElement
                            name={!whiteBlack ? "1z" : "4z"}
                            size={largeSize}
                            onClick={() => addElements("1z")}
                        />
                        <RotatingElement
                            name={!whiteBlack ? "1r" : "4r"}
                            size={largeSize}
                            onClick={() => addElements("1r")}
                        />
                        <RotatingElement
                            name={!whiteBlack ? "3z" : "2z"}
                            size={largeSize}
                            onClick={() => addElements("3z")}
                        />
                    </div>

                    <ExampleGrid
                        grid={!whiteBlack ? emptydGrid : whiteBlackElements}
                        size={largeSize}
                    />

                    <Switch
                        checked={whiteBlack}
                        onChange={() => setWhiteBlack((prev) => !prev)}
                        sx={{
                            alignSelf: "center",
                            marginTop: "0px !important",
                        }}
                        disabled={
                            rotation["1z"] < 4 ||
                            rotation["1r"] < 1 ||
                            rotation["3z"] < 4
                        }
                    />
                    <p style={{ marginTop: "10px" }}>
                        Prohozením barev pak tento počet zdvojnásobil na 20.
                    </p>

                    <p>
                        Elementy rozdělil do skupin podle hustoty barvy. Skupina
                        1 obsahuje nejsvětlejší. Těmi jsou <b>1z</b>, <b>1b</b>,{" "}
                        <b>1y</b>, <b> 1i</b>, <b>1r</b> a <b>1d</b>. Skupina 2
                        obsahuje prvky <b>2z</b>, <b>2b</b>, <b>2y</b> a{" "}
                        <b>2r</b> a tak dále. Skupina 4 tak obsahuje nejtmavší
                        elementy.
                    </p>

                    <ExampleGrid
                        grid={allElements}
                        size={smallSize}
                        displayName
                    />
                </Stack>
            </MediaCard>
        </>
    );
};
