"use client";
import { Box } from "@mui/material";
import { ArtistInputs } from "./ArtistInputs/ArtistInputs";
import { FrontPage } from "./FrontPage";
import { Section } from "./Section";

export default function HomePage() {
    return (
        <Box sx={{ display: "flex" }}>
            <div>
                <Section backgroundColor={"rgb(241, 79, 77)"}>
                    <FrontPage />
                </Section>

                <Section backgroundColor="white" title="A. Vstupy umělce">
                    <ArtistInputs />
                </Section>

                <Section
                    backgroundColor={"rgb(24, 76, 151)"}
                    title="B. Dopočet chybějících prvků"
                >
                    <div></div>
                </Section>
            </div>
        </Box>
    );
}
