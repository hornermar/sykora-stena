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
                    Dalším vstupem je <strong>koeficient</strong>, který má
                    číselnou hodnotu větší než 0.
                </p>
                {/* TODO: Add tooltip widt ecample of lightest and darkest elements */}
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
                    {"0 < koeficient < 4"}
                </Typography>
            </Card>
        </>
    );
};
