import { Box, Typography } from "@mui/material";
import { useState, useEffect, use } from "react";
import { primaryColor } from "./Dashboard";

type LoadingOverlayProps = {
    // children: React.ReactNode;
};

export const LoadingOverlay = ({}: LoadingOverlayProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        isLoading && (
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    zIndex: 999,
                    backgroundColor: primaryColor,
                    display: isLoading ? "block" : "none",
                    position: "absolute",
                }}
            >
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        fontSize: "60px",
                        paddingLeft: "20px",
                        paddingTop: "20px",
                    }}
                >
                    Loading ...
                </Typography>
                <Box
                    sx={{
                        backgroundColor: "black",
                        width: "100vw",
                        position: "absolute",
                        bottom: 0,
                        // height: `calc(80vh * ${loadingPercentage / 100})`,
                    }}
                />
            </Box>
        )
    );
};
