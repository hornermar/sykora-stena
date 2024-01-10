"use client";
import {
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import barsIcon from "../public/bars-solid.svg";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";

interface Props {
    window?: () => Window;
    children: React.ReactNode;
}

const drawerWidth = 240;
const navItems = ["Vyzkoušet", "Kontakt"];

export default function RootLayout(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Něco
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <Box
                        sx={{
                            display: "flex",
                        }}
                    >
                        <IconButton
                            color="inherit"
                            edge="start"
                            size="large"
                            sx={{
                                position: "absolute",
                                top: 6,
                                left: 20,
                                backgroundColor: "black",
                                color: "white",
                            }}
                        >
                            J3
                        </IconButton>
                        <div>
                            <IconButton
                                color="inherit"
                                size="large"
                                onClick={handleDrawerToggle}
                                sx={{
                                    position: "fixed",
                                    top: 6,
                                    right: 10,
                                    display: { sm: "none" },
                                    backgroundColor: "white",
                                    zIndex: 100,
                                }}
                            >
                                <Image
                                    src={barsIcon}
                                    width={25}
                                    height={25}
                                    alt={"rotate icon"}
                                />
                            </IconButton>
                        </div>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            Něco
                        </Typography>
                        <Box
                            sx={{
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: "#fff" }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>

                        <nav>
                            <Drawer
                                container={container}
                                anchor="right"
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: "block", sm: "none" },
                                    "& .MuiDrawer-paper": {
                                        boxSizing: "border-box",
                                        width: drawerWidth,
                                    },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </nav>
                    </Box>

                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            bgcolor: "background.default",
                            ml: ["0px", "56px", "500px"],
                            mr: ["0px", "56px", "500px"],
                            mt: ["0px", "56px", "64px"],
                            // p: 3,
                        }}
                    >
                        {props.children}
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
