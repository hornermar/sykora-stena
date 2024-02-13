import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import rightLeftIcon from "../../../public/right-left-solid.svg";
import { Card } from "../common/Card";
import { ExampleGrid } from "../ExampleGrid";
import { SeparateElement } from "./SeparateElement";
import { clickableColor, primaryColor } from "../Dashboard";

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

type ArtistInputsElementsProps = {};

export const ArtistInputsElements = ({}: ArtistInputsElementsProps) => {
    const [whiteBlack, setWhiteBlack] = useState(false);
    const [rotation, setRotation] = useState(0);
    const elementRef = useRef<any>(null);

    const handleScroll = () => {
        const { top } = elementRef?.current?.getBoundingClientRect();
        const vh = (top / window.innerHeight) * 100;

        if (vh > 0 && vh < 100) rotate(vh);
    };

    const rotate = (vh: number) => {
        if (vh <= 25) {
            setRotation(3);
        } else if (vh <= 50) {
            setRotation(2);
        } else if (vh <= 75) {
            setRotation(1);
        } else {
            setRotation(0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
            <Stack
                direction="row"
                justifyContent="space-between"
                ref={elementRef}
            >
                <Card color="white">
                    <div ref={elementRef}>
                        <SeparateElement
                            name={!whiteBlack ? "1z" : "4z"}
                            size={largeSize}
                            rotation={rotation}
                        />
                    </div>
                </Card>
                <Card color="white">
                    <SeparateElement
                        name={!whiteBlack ? "1r" : "4r"}
                        size={largeSize}
                        rotation={rotation}
                    />
                </Card>
                <Card color="white">
                    <SeparateElement
                        name={!whiteBlack ? "3z" : "2z"}
                        size={largeSize}
                        rotation={rotation}
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
                        sx={{ backgroundColor: `${primaryColor} !important` }}
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
