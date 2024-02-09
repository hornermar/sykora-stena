"use client";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import rightLeftIcon from "../../../public/right-left-solid.svg";
import { Card } from "../common/Card";
import { ExampleGrid } from "../ExampleGrid";
import { SeparateElement } from "./SeparateElement";
import { useScrollPositionChange } from "@/app/hooks/useScrollPositionChange";

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
    const [rotationOfAll, setRotationOfAll] = useState(0);

    let lastScrollY = 0;
    useScrollPositionChange(() => {
        const currentScrollY = Math.floor(window.scrollY);

        if (currentScrollY !== lastScrollY && currentScrollY % 20 === 0) {
            setRotationOfAll((prev) => prev + 1);

            lastScrollY = currentScrollY;
        }
    });

    return (
        <>
            <Card heading="1. Elementy" color="white">
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

                <p style={{ marginBottom: "0" }}>
                    Jejich postupným otáčením získal 10 různých elementů.
                </p>
            </Card>
            <Stack direction="row" justifyContent="space-between">
                <Card color="white">
                    <SeparateElement
                        name={!whiteBlack ? "1z" : "4z"}
                        size={largeSize}
                        defaultRotation={rotationOfAll}
                    />
                </Card>
                <Card color="white">
                    <SeparateElement
                        name={!whiteBlack ? "1r" : "4r"}
                        size={largeSize}
                        defaultRotation={rotationOfAll}
                    />
                </Card>
                <Card color="white">
                    <SeparateElement
                        name={!whiteBlack ? "3z" : "2z"}
                        size={largeSize}
                        defaultRotation={rotationOfAll}
                    />
                </Card>
            </Stack>
            <Card color="white">
                <p style={{ margin: 0 }}>
                    Prohozením barev zdvojnásobil na 20. Každý element tak má
                    svůj negativ.
                </p>
            </Card>
            <Card color="white">
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
            </Card>
            <Card color="white">
                <p style={{ margin: 0 }}>
                    Elementy následně rozdělil do skupin 1, 2, 3 a 4 podle
                    poměru barev černá-bílá (skupina 1 obsahuje nejsvětlejší,
                    skupina 4 naopak nejtmavší).
                </p>
                <p>
                    Natočení základních elementů je označeno písmeny (z, b, y,
                    i, r, d).
                </p>
            </Card>
            <Card color="white">
                <ExampleGrid grid={allElements} size={smallSize} displayName />
            </Card>
        </>
    );
};
