import { Typography } from "@mui/material";
import { Card } from "../Card";

type ArtistInputsCoefficientColor = {
    color: string;
};

export const ArtistInputsCoefficient = ({
    color,
}: ArtistInputsCoefficientColor) => {
    return (
        <>
            <Card heading="3. Koeficient" color="white">
                <p>
                    Dalším vstupem je koeficient <strong>C</strong>, který má
                    číselnou hodnotu větší než 0.
                    {/* Určuje, o kolik se změní barva na{" "} */}
                    {/* <Tooltip
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
                    <strong>+</strong>) a mínus (<strong>-</strong>). */}
                </p>
                <p>
                    Koeficient má funkci urychlit nebo zpomalit přechody od
                    světlých elementů k tmavým nebo naopak. Vyšší koeficient
                    znamená kontrastnější přechody, nižší pozvolnější.
                </p>
                <p>
                    V diagramu jsou tato místa umělcem označena znaménky{" "}
                    <b>+</b> a <b>-</b>
                </p>
            </Card>
            <Card color={color}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: "400",
                        fontSize: "20px",
                        textAlign: "center",
                    }}
                >
                    {"0 < C < 4"}
                </Typography>
            </Card>
        </>
    );
};
