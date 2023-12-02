import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";

export const metadata = {
    title: "Next.js App Router + Material UI v5",
    description: "Next.js App Router + Material UI v5",
};

// const DRAWER_WIDTH = 240;

const LINKS = [
    { text: "Home", href: "/" },
    { text: "Starred", href: "/starred" },
    { text: "Tasks", href: "/tasks" },
];

const PLACEHOLDER_LINKS = [
    { text: "Settings" },
    { text: "Support" },
    { text: "Logout" },
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
                        <Toolbar sx={{ backgroundColor: "background.paper" }}>
                            <Typography variant="h6" color="text.primary">
                                Algoritmus
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {/* <Drawer
                        sx={{
                            width: DRAWER_WIDTH,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                width: DRAWER_WIDTH,
                                boxSizing: "border-box",
                                top: ["48px", "56px", "64px"],
                                height: "auto",
                                bottom: 0,
                            },
                        }}
                        variant="permanent"
                        anchor="left"
                    >
                        <Divider />
                        <List>
                            {LINKS.map(({ text, href }) => (
                                <ListItem key={href} disablePadding>
                                    <ListItemButton
                                        component={Link}
                                        href={href}
                                    >
                                        <ListItemIcon></ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ mt: "auto" }} />
                        <List>
                            {PLACEHOLDER_LINKS.map(({ text }) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon></ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer> */}
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            bgcolor: "background.default",
                            ml: ["0px", "56px", "500px"],
                            mr: ["0px", "56px", "500px"],
                            mt: ["48px", "56px", "64px"],
                            // p: 3,
                        }}
                    >
                        {children}
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
