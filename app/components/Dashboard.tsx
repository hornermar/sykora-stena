"use client";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrowToTopIcon from "../../public/angles-up-solid.svg";
import { ArtistInputs } from "./ArtistInputs/ArtistInputs";
import { Contact } from "./Contact/Contact";
import { Example } from "./Example/Example";
import { FrontPage } from "./FrontPage";
import { Playground } from "./Playground/Playground";
import { Section } from "./Section";
import { Sources } from "./Sources/Sources";

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
    // 11 -----
    ["1z", "-", "-", "-", "1b", "1z", "0", "-", "-", "-", "1i"],
    // 12
    ["1d", "0", "1d", "0", "0", "0", "1d", "-", "-", "-", "1b"],
    // 13
    ["0", "4z", "-", "-", "1d", "0", "0", "0", "+", "+", "4r"],
    // 14
    ["0", "0", "0", "0", "0", "0", "1y", "0", "+", "+", "0"],
    // 15
    ["+", "+", "0", "1b", "0", "0", "0", "0", "4z", "0", "0"],
    // 16
    ["2r", "0", "0", "+", "+", "1r", "0", "+", "+", "0", "-"],
    // 17
    ["-", "0", "4y", "0", "+", "0", "0", "+", "+", "0", "-"],
    // 18
    ["-", "0", "0", "+", "+", "0", "1d", "0", "3y", "-", "-"],
    // 19
    ["-", "0", "0", "3r", "+", "0", "+", "+", "+", "-", "1y"],
    // 20
    ["1b", "0", "0", "3y", "0", "1y", "+", "+", "+", "0", "-"],
    // 21
    ["-", "0", "+", "0", "-", "-", "+", "+", "4i", "0", "-"],
    // 22
    ["-", "0", "3y", "0", "+", "1r", "0", "+", "+", "+", "0"],
];

export default function HomePage() {
    const [showButton, setShowButton] = useState(false);

    const checkScrollPosition = () => {
        if (window.scrollY > 7200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

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
                <FrontPage color="rgb(247, 133, 130)" />
            </Section>

            <Section>
                <ArtistInputs
                    grid={gridForExample}
                    color="rgb(174, 223, 255)"
                />
            </Section>
            <Section>
                <Example
                    defaultGrid={gridForExample}
                    color="rgb(247, 133, 130)"
                />
            </Section>
            <Section id="playground">
                <Playground
                    defaultGrid={gridForExample}
                    color="rgb(174, 223, 255)"
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
