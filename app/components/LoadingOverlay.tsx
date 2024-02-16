"use client";
import { Backdrop, Box, Fade, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { clickableColor, primaryColor } from "./Dashboard";

type LoadingOverlayProps = {
    // children: React.ReactNode;
};

const TOTAL_IMAGES = 36;
const LOADED_THRESHOLD = 20;

export const LoadingOverlay = ({}: LoadingOverlayProps) => {
    const [loaded, setLoaded] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const loadedCountRef = useRef(0);
    const percentageRef = useRef(0);

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("img"));

        const interval = setInterval(() => {
            if (percentageRef.current < 99) {
                percentageRef.current++;
                setPercentage(percentageRef.current);
            }
        }, 5);

        const handleLoad = () => {
            if (loadedCountRef.current >= TOTAL_IMAGES) {
                console.log("stop loading");
            } else {
                loadedCountRef.current++;
                setLoaded(loadedCountRef.current);
            }
        };

        elements.forEach((elem: HTMLImageElement) => {
            if (elem.complete) {
                handleLoad();
            } else {
                elem.addEventListener("load", handleLoad);
            }
        });

        return () => {
            clearInterval(interval);
            elements.forEach((elem: HTMLImageElement) => {
                elem.removeEventListener("load", handleLoad);
            });
        };
    }, []);

    useEffect(() => {
        if (loaded >= LOADED_THRESHOLD && percentage === 99) {
            setTimeout(() => {
                setPercentage(100);
            }, 500);
        }
    }, [loaded, percentage]);

    return (
        <Fade appear={false} in={percentage < 100}>
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    zIndex: 999,
                    position: "fixed",
                }}
            >
                <Box>
                    <Box
                        sx={{
                            width: "100vw",
                            height: "45vh",
                            backgroundColor: primaryColor,
                        }}
                    >
                        <Fade in={percentage > 0 && percentage < 100}>
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{
                                    color: clickableColor,
                                    fontSize: "80px",
                                    paddingLeft: "20px",
                                }}
                            >
                                <>{percentage < 100 ? percentage : 99}</>
                            </Typography>
                        </Fade>
                    </Box>
                    <Box
                        sx={{
                            width: "100vw",
                            height: "55vh",
                            backgroundColor: "black",
                        }}
                    ></Box>

                    <Box
                        sx={{
                            backgroundColor: "white",
                            width: "100vw",
                            position: "absolute",
                            bottom: 0,
                            height:
                                percentage < 99
                                    ? `calc(55vh * ${percentage / 100})`
                                    : "calc(55vh - 2px)",
                        }}
                    />
                </Box>
            </Box>
        </Fade>
    );
};
