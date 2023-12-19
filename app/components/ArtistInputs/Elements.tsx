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

const blackWhiteElements = [
    ["1z", "1r", "3z"],
    ["1b", "1d", "3b"],
    ["1y", "0", "3y"],
    ["1i", "0", "3r"],
];

const whiteBlackElements = [
    ["4z", "4r", "2z"],
    ["4b", "4d", "2b"],
    ["4y", "0", "2y"],
    ["4i", "0", "2r"],
];

const smallSize = 45;
const largeSize = 78;

export const ArtistInputsElements = () => {
    const [blackWhite, setBlackWhite] = useState(false);

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

                    <p>Jejich postupným otáčením získal 10 různých elementů.</p>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <RotatingElement name="1z" size={largeSize} />
                        <RotatingElement name="1r" size={largeSize} />
                        <RotatingElement name="3z" size={largeSize} />
                    </div>

                    <p>Prohozením barev pak tento počet zdvojnásobil na 20.</p>

                    <Switch
                        checked={blackWhite}
                        onChange={() => setBlackWhite((prev) => !prev)}
                        sx={{
                            alignSelf: "center",
                            marginTop: "15px !important",
                        }}
                    />
                    <ExampleGrid
                        grid={
                            blackWhite ? blackWhiteElements : whiteBlackElements
                        }
                        size={largeSize}
                    />

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

            {/* <MediaCard color="transparent">
                <p>
                    Pro počítač jsou u každého prvku zaznamenány barvy na každé
                    ze čtyř stran a také, zda má na straně přilehlý otevřený
                    půlkruh nebo ne.
                </p>
            </MediaCard> */}
        </>
    );
};
