"use client";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { map } from "lodash";
import { getElements } from "../utils/getElements";
import MediaCard from "./MediaCard";
import { Structure } from "./Structure";

const StyledButton = styled(Button)({
    boxShadow: "none",
    padding: "15px 20px",
    borderRadius: "25px",
    color: "black",
    backgroundColor: "#d5d4d6",
    textTransform: "none",
    "&:hover": {
        boxShadow: "none",
        backgroundColor: "#b5b5b5",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#b5b5b5",
    },
    "&:focus": {
        backgroundColor: "#b5b5b5",
    },
});

export const FrontPage = () => {
    const emptyGrid = [
        ["3z", "0", "+", "0", "-", "0"],
        ["+", "0", "+", "0", "-", "0"],
        ["+", "0", "+", "0", "-", "0"],
        ["+", "0", "+", "0", "-", "0"],
        ["+", "0", "+", "0", "-", "0"],
    ];
    const form = {
        structure: {
            rows: 5,
            columns: 6,
        },
        coefficient: 0.75,
        rule: 3,
    };
    const grid = getElements(form, emptyGrid);

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: "46px",
                    padding: "0 16px",
                    fontWeight: "400",
                }}
            >
                Zdeněk Sýkora:
            </Typography>
            <div style={{ padding: "0 16px", fontWeight: "400" }}>
                {map(
                    ["Algoritmus", "pro tvorbu", "černobílých", "struktur"],
                    (word: string, index) => (
                        <Typography
                            variant="h2"
                            key={index}
                            sx={{
                                fontSize: "46px",
                                fontWeight: "400",
                            }}
                        >
                            {word}
                        </Typography>
                    )
                )}
            </div>

            <MediaCard color="white">
                <div>
                    <Structure size={58} grid={grid} cellType="image" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. // Nullam justo enim, consectetuer nec,
                        ullamcorper ac, // vestibulum in, elit. Fusce tellus
                        odio, dapibus id fermentum // quis, suscipit id erat.
                        Proin in tellus sit amet nibh
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. // Nullam justo enim, consectetuer nec,
                        ullamcorper ac, // vestibulum in, elit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. // Nullam justo enim, consectetuer nec,
                        ullamcorper ac, // vestibulum in, elit.
                    </p>
                    <div style={{ paddingTop: "10px" }}>
                        <StyledButton
                            variant="contained"
                            fullWidth
                            //onCLick transfer to "/algotitmus"
                            onClick={() => {
                                window.location.href = "/algoritmus";
                            }}
                        >
                            Vyzkoušet
                        </StyledButton>
                    </div>
                </div>
            </MediaCard>

            <MediaCard color="transparent">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. //
                    Nullam justo enim, consectetuer nec, ullamcorper ac, //
                    vestibulum in, elit.
                </p>
            </MediaCard>
        </>
    );
};
