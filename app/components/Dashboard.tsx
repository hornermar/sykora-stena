"use client";
import { Box } from "@mui/material";
import { ArtistInputs } from "./ArtistInputs/ArtistInputs";
import { Calculation } from "./Calculation/Calculation";
import { Example } from "./Example/Example";
import { FrontPage } from "./FrontPage";
import { Playground } from "./Playground/Playground";
import { Section } from "./Section";

const gridForExample = [
    // 1
    ["-", "-", "-", "0", "3r", "1r", "+", "+", "0", "-", "-"],
    // 2
    ["-", "1r", "+", "+", "-", "-", "-", "4z", "+", "-", "2r"],
    // 3
    ["-", "+", "+", "4i", "-", "1i", "-", "0", "0", "0", "0"],
    // 4
    ["-", "+", "+", "+", "-", "-", "-", "3b", "+", "+", "0"],
    // 5
    ["1z", "0", "0", "0", "-", "1d", "-", "+", "+", "0", "-"],
    // 6
    ["-", "+", "+", "0", "-", "-", "1y", "+", "+", "+", "1d"],
    // 7
    ["-", "+", "4z", "+", "1r", "-", "-", "0", "+", "0", "-"],
    // 8
    ["0", "+", "+", "+", "0", "-", "-", "3b", "0", "-", "-"],
    // 9
    ["+", "+", "+", "1d", "0", "-", "-", "+", "+", "4r", "-"],
    // 10
    ["+", "0", "3b", "+", "0", "0", "1r", "+", "+", "0", "-"],
];

export default function HomePage() {
    return (
        <Box sx={{ display: "flex" }}>
            <div>
                <Section>
                    <FrontPage />
                </Section>

                <Section>
                    <ArtistInputs grid={gridForExample} />
                </Section>

                <Section>
                    <Calculation />
                </Section>

                <Section>
                    <Example defaultGrid={gridForExample} />
                </Section>

                <Section id="playground">
                    <Playground defaultGrid={gridForExample} />
                </Section>
            </div>
        </Box>
    );
}
