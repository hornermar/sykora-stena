"use client";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import arrowToTopIcon from "../../public/angles-up-solid.svg";
import { ArtistInputs } from "./ArtistInputs/ArtistInputs";
import { Contact } from "./Contact/Contact";
import { Example } from "./Example/Example";
import { FrontPage } from "./FrontPage/FrontPage";
import { Playground } from "./Playground/Playground";
import { Section } from "./common/Section";
import { Sources } from "./Sources/Sources";
import { exampleGrid } from "../lib/exampleGrid";

export default function HomePage() {
    const [scrollTop, setScrollTop] = useState(0);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = (event: any) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollTop > window.innerHeight) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [scrollTop]);

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
