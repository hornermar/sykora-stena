"use client";
import { Box } from "@mui/material";
import { DescriptionOfInputs } from "./DescriptionOfInputs";
import { FrontPage } from "./FrontPage";
import { Section } from "./Section";

export default function HomePage() {
    return (
        <Box sx={{ display: "flex" }}>
            <div>
                <Section backgroundColor={"rgb(241, 79, 77)"}>
                    <FrontPage />
                </Section>

                <Section backgroundColor="white">
                    <DescriptionOfInputs />
                </Section>
            </div>
        </Box>
    );
}
