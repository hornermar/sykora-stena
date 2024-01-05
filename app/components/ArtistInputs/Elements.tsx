"use client";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import rightLeftIcon from "../../../public/right-left-solid.svg";
import Card from "../Card";
import { ExampleGrid } from "../ExampleGrid";
import { SeparateElement } from "./SeparateElement";

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

const smallSize = 35;
const largeSize = 60;

export const ArtistInputsElements = () => {
    const [whiteBlack, setWhiteBlack] = useState(false);
    // const [emptydGrid, setEmptyGrid] = useState([
    //     ["1z", "1r", "3z"],
    //     ["F", "F", "F"],
    //     ["F", "0", "F"],
    //     ["F", "0", "F"],
    // ]);
    // const [rotation, setRotation] = useState({
    //     "1z": 1,
    //     "1r": 1,
    //     "3z": 1,
    // });

    // const addElement = (name: "1z" | "1r" | "3z", order: number) => {
    //     setEmptyGrid((prev) => {
    //         const newGrid = [...prev];
    //         newGrid[rotation[name]][order] =
    //             blackWhiteElements[rotation[name]][order];
    //         return newGrid;
    //     });
    //     setRotation((prev) => ({ ...prev, [name]: prev[name] + 1 }));
    // };

    // const addElements = (name: string) => {
    //     switch (name) {
    //         case "1z":
    //             rotation[name] <= 3 && addElement(name, 0);
    //             break;
    //         case "1r":
    //             rotation[name] <= 1 && addElement(name, 1);
    //             break;
    //         case "3z":
    //             rotation[name] <= 3 && addElement(name, 2);
    //             break;
    //     }
    // };

    return (
        <>
            <Card color="transparent">
                Ještě před spuštěním výpočtu, který provedl algoritmus, musel
                Zdeněk Sýkora nastavit <b>4</b> parametry. Na těch závisela
                výsledná podoba obrazu. V této části si ukážeme, které to jsou.
            </Card>
            <Card heading="1. Elementy" color="rgb(219, 219, 219)">
                {/* <Stack
                    spacing={3}
                    flexDirection="column"
                    justifyContent={"center"}
                > */}
                <p>
                    Nejříve musel Sýkora určit elementy, které pro danou
                    stukturu použije.
                </p>

                <p>
                    Černobílá struktura je složena ze 3 základních obrazců. Do
                    čtverce umístil jeden nebo dva půlkruhy. Ty jsou buď za
                    sebou nebo proti sobě. Nikdy ale ne tak, aby dohromady
                    vytvořili kruh.
                </p>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ marginTop: "30px" }}
                >
                    <SeparateElement
                        name={!whiteBlack ? "1z" : "4z"}
                        size={largeSize}
                        isRotating
                    />
                    <SeparateElement
                        name={!whiteBlack ? "1r" : "4r"}
                        size={largeSize}
                        isRotating
                    />
                    <SeparateElement
                        name={!whiteBlack ? "3z" : "2z"}
                        size={largeSize}
                        isRotating
                    />
                </Stack>

                <p style={{ marginBottom: "30px" }}>
                    Jejich postupným otáčením získal 10 různých elementů.
                </p>

                {/* <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <SeparateElement
                            name={!whiteBlack ? "1z" : "4z"}
                            size={largeSize}
                            onClick={() => addElements("1z")}
                            isRotating
                        />
                        <SeparateElement
                            name={!whiteBlack ? "1r" : "4r"}
                            size={largeSize}
                            onClick={() => addElements("1r")}
                            isRotating
                        />
                        <SeparateElement
                            name={!whiteBlack ? "3z" : "2z"}
                            size={largeSize}
                            onClick={() => addElements("3z")}
                            isRotating
                        />
                    </div> */}

                <ExampleGrid
                    grid={!whiteBlack ? blackWhiteElements : whiteBlackElements}
                    size={largeSize}
                />

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setWhiteBlack((prev) => !prev)}
                    >
                        <Image
                            src={rightLeftIcon}
                            width={20}
                            height={20}
                            alt={"right left arrow icon"}
                        />
                    </IconButton>
                </div>

                <p>Prohozením barev se tento počet zdvojnásobil na 20.</p>

                {/* <Switch
                        checked={whiteBlack}
                        onChange={() => setWhiteBlack((prev) => !prev)}
                        sx={{
                            alignSelf: "center",
                            marginTop: "0px !important",
                        }}
                        // disabled={
                        //     rotation["1z"] < 4 ||
                        //     rotation["1r"] < 1 ||
                        //     rotation["3z"] < 4
                        // }
                    /> */}

                <p style={{ marginBottom: "30px" }}>
                    Elementy následně rozdělil do skupin <b>1</b>, <b>2</b>,{" "}
                    <b>3</b> a <b>4</b> podle hustoty barvy. Skupina 1 (1z, 1b,
                    1y atd.), obsahuje nejsvětlejší prvky. Skupina 4 (4z, 4b, 4y
                    atd.) naopak obsahuje nejtmavší prvky.
                </p>

                <ExampleGrid grid={allElements} size={smallSize} displayName />
                {/* </Stack> */}
            </Card>
        </>
    );
};
