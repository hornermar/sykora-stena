"use client";
import Box from "@mui/material/Box";
import * as React from "react";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout(props: Props) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            bgcolor: "background.default",
                            ml: ["0px", "56px", "500px"],
                            mr: ["0px", "56px", "500px"],
                            mt: ["0px", "56px", "64px"],
                        }}
                    >
                        {props.children}
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
