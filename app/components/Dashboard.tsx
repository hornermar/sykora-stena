"use client";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrowToTopIcon from "../../public/angles-up-solid.svg";
import { ArtistInputs } from "./ArtistInputs/ArtistInputs";
import { Contact } from "./Contact/Contact";
import { Example } from "./Example/Example";
import { FrontPage } from "./FrontPage/FrontPage";
import { Playground } from "./Playground/Playground";
import { Section } from "./common/Section";
import { Sources } from "./Sources/Sources";
import { useScrollPositionChange } from "@/app/hooks/useScrollPositionChange";
import { exampleGrid } from "../lib/exampleGrid";

export default function HomePage() {
    const [showButton, setShowButton] = useState(false);

    const checkScrollPosition = () => {
        if (window.scrollY > 7200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useScrollPositionChange(() => {
        checkScrollPosition();
    });

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => window.removeEventListener("scroll", checkScrollPosition);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Box>
            {showButton && (
                <IconButton
                    color="inherit"
                    size="large"
                    onClick={() => scrollToTop()}
                    sx={{
                        position: "fixed",
                        bottom: 10,
                        right: 10,
                        zIndex: 100,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <Image
                        src={arrowToTopIcon}
                        width={20}
                        height={20}
                        alt={"arrow to the top icon"}
                    />
                </IconButton>
            )}

            <Section id="frontpage">
                <FrontPage color="rgb(224, 217, 211)" />
            </Section>

            <Section>
                <ArtistInputs grid={exampleGrid} color="rgb(224, 217, 211)" />
            </Section>
            <Section>
                <Example defaultGrid={exampleGrid} color="rgb(224, 217, 211)" />
            </Section>
            <Section id="playground">
                <Playground
                    defaultGrid={exampleGrid}
                    color="rgb(224, 217, 211)"
                />
            </Section>
            <Section>
                <Sources />
            </Section>
            <Section>
                <Contact />
            </Section>
        </Box>
    );
}
