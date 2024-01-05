"use client";
import { Box } from "@mui/material";
import { ArtistInputs } from "./ArtistInputs/ArtistInputs";
import { Calculation } from "./Calculation/Calculation";
import { FrontPage } from "./FrontPage";
import { Section } from "./Section";

export default function HomePage() {
    return (
        <Box sx={{ display: "flex" }}>
            <div>
                <Section backgroundColor={"rgb(241, 79, 77)"}>
                    <FrontPage />
                </Section>

                <Section
                    backgroundColor="white"
                    letter="A."
                    title="Vstupy umělce"
                >
                    <ArtistInputs />
                </Section>

                <Section
                    backgroundColor={"rgb(4, 117, 159)"}
                    color="white"
                    letter="B."
                    title="Dopočet chybějících prvků"
                >
                    <Calculation />
                </Section>
            </div>
        </Box>
    );
}
