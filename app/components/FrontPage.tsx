"use client";
import { Typography } from "@mui/material";
import { map } from "lodash";
import { getElements } from "../utils/getElements";
import { Button } from "./Button";
import MediaCard from "./MediaCard";
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
                    padding: "0 16px",
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

            <MediaCard color="white">
                <div>
                    <Structure
                        size={50}
                        grid={grid}
                        cellType="image"
                        displaySwitch
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. // Nullam justo enim, consectetuer nec,
                        ullamcorper ac, // vestibulum in, elit. Fusce tellus
                        odio, dapibus id fermentum // quis, suscipit id erat.
                        Proin in tellus sit amet nibh
                    </p>
                    <p>
                        Černobílou strukturu vytvořil Sýkora společně s
                        Jaroslavem Blažkem v roce 1966. Popsali ji v článku
                        Computer-aided multielement geometrical abstract
                        paintings v časopise Leonardo.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. // Nullam justo enim, consectetuer nec,
                        ullamcorper ac, // vestibulum in, elit.
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
            </MediaCard>

            <MediaCard color="transparent">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. //
                    Nullam justo enim, consectetuer nec, ullamcorper ac, //
                    vestibulum in, elit.
                </p>
            </MediaCard>
        </>
    );
};
