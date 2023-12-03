"use client";
import { Stack, Switch } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { getElementImage } from "../../utils/getElementImages";
import { ExampleGrid } from "../ExampleGrid";
import MediaCard from "../MediaCard";

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
    const [blackWhite, setBlackWhite] = useState(true);

    //setInterval(() => setBlackWhite((prev) => !prev), 4000);

    return (
        <>
            <MediaCard color="transparent">
                Ještě před spuštěním výpočtu, který provedl algoritmus, musel
                Zdeněk Sýkora nastavit několik parametrů. Na těch závisela
                výsledná podoba obrazu.
            </MediaCard>
            <MediaCard heading="1. Elementy" color="rgb(219, 219, 219)">
                <Stack spacing={4} flexDirection="column">
                    <p>
                        Nejříve musel Sýkora určit elementy, které pro danou
                        stukturu použije. Černobílá struktura je složena ze 3
                        základních obrazců. Do čtverce umístil jeden nebo dva
                        půlkruhy. Ty jsou bud za sebou nebo proti sobě. Nikdy
                        ale ne tak, aby vytvořili dohromady kruh.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* TODO: change color after 10s, rotate */}
                        <div>
                            <Image
                                src={getElementImage("1z")}
                                width={largeSize}
                                height={largeSize}
                                alt={"element 1z"}
                            />
                        </div>
                        <div>
                            <Image
                                src={getElementImage("1r")}
                                width={largeSize}
                                height={largeSize}
                                alt={"element 1r"}
                            />
                        </div>
                        <div>
                            <Image
                                src={getElementImage("3z")}
                                width={largeSize}
                                height={largeSize}
                                alt={"element 3z"}
                            />
                        </div>
                    </div>
                    <p>
                        Jejich otáčením získal 10 prvků. Tento počet následným
                        prohozením barev zvýšil na 20. Každý prvek má pak vždy
                        právě jeden protějšek v opačných barvách.
                    </p>

                    <ExampleGrid
                        grid={
                            blackWhite ? blackWhiteElements : whiteBlackElements
                        }
                        size={largeSize}
                    />
                    <Switch
                        checked={blackWhite}
                        onChange={() => setBlackWhite((prev) => !prev)}
                        sx={{
                            alignSelf: "flex-end",
                            marginTop: "0px !important",
                        }}
                    />

                    <p>
                        Tyto prvky poté rozdělil do skupin podle hustoty barvy.
                        Skupina 1 v tomto případě obsahuje nejsvětlejší prvky{" "}
                        <b>1z</b>, <b>1b</b>, <b>1y</b>, <b></b>
                        1i, <b>1r</b> a <b>1d</b>. Skupina 2 obsahovala prvky{" "}
                        <b>2z</b>, <b>2b</b>, <b>2y</b> a <b>2r</b> a tak dále.
                    </p>

                    <ExampleGrid
                        grid={allElements}
                        size={smallSize}
                        displayName
                    />
                </Stack>
            </MediaCard>

            <MediaCard color="transparent">
                <p>
                    Pro počítač jsou u každého prvku zaznamenány barvy na každé
                    ze čtyř stran a také, zda má na straně přilehlý otevřený
                    půlkruh nebo ne.
                </p>
            </MediaCard>
        </>
    );
};
