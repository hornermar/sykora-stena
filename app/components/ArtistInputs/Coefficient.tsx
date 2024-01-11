import { Tooltip, Typography } from "@mui/material";
import Card from "../Card";

export const ArtistInputsCoefficient = () => {
    return (
        <>
            <Card heading="3. Koeficient" color="white">
                <p>
                    Dalším vstupem je <strong>koeficient</strong>, který má
                    číselnou hodnotu větší než 0. Určuje, o kolik se změní barva
                    na{" "}
                    <Tooltip
                        placement="top"
                        title="Nejsvětlejší jsou prvky, které začínají číslem 1 (1z, 1b, 1y, 1i, 1r, 1d)"
                    >
                        <span>
                            <u>světlejší</u>
                        </span>
                    </Tooltip>{" "}
                    nebo{" "}
                    <Tooltip
                        placement="top"
                        title="Nejtmavší jsou prvky, které začínají číslem 4 (4z, 4b, 4y, 4i, 4r, 4d)"
                    >
                        <span>
                            <u>tmavší</u>
                        </span>
                    </Tooltip>{" "}
                    v místech, kde se v poli vyskytují znaménka plus (
                    <strong>+</strong>) a mínus (<strong>-</strong>).
                </p>
                <p style={{ marginBottom: 0 }}>
                    Nižší hodnoty <strong>koeficientu</strong> způsobí menší
                    změnu v hustotě barvy, vyšší hodnoty naopak znamenají větší
                    změnu.
                </p>
            </Card>
            <Card color="rgb(184, 231, 254)">
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: "400",
                        fontSize: "20px",
                        textAlign: "center",
                    }}
                >
                    {"0 < koeficient < 4"}
                </Typography>
            </Card>
        </>
    );
};
