import { getElements } from "@/app/utils/getElements";
import { Slider, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../Card";
import { Structure } from "../Structure";

type ArtistInputsCoefficientProps = {
    grid: string[][];
    rule: number;
};

export const ArtistInputsCoefficient = ({
    grid,
    rule,
}: ArtistInputsCoefficientProps) => {
    const [coefficient, setCoefficient] = useState(2);
    const [gridWithCoefficient, setGridWithCoefficient] = useState(grid);

    useEffect(() => {
        setGridWithCoefficient(getElements(rule, coefficient, grid));
    }, [coefficient]);

    return (
        <Card heading="3. Koeficient" color="rgb(219, 219, 219)">
            <p>
                Dalším vstupem je koeficient <strong>c</strong>, který má
                číselnou hodnotu větší než 0. Určuje, o kolik se změní barva na{" "}
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
                    title="Nejsvětlejší jsou prvky, které začínají číslem 4 (4z, 4b, 4y, 4i, 4r, 4d)"
                >
                    <span>
                        <u>tmavší</u>
                    </span>
                </Tooltip>{" "}
                v místech, kde se v poli vyskytují znaménka plus (
                <strong>+</strong>) a mínus (<strong>-</strong>).
            </p>
            <p>
                Nižší hodnoty <strong>c</strong> způsobí menší změnu v hustotě
                barvy, vyšší hodnoty naopak znamenají větší změnu.
            </p>
            <p>
                Na příkladu jde vidět, že pokud se koeficient blíží 0, výsledkem
                bude obraz s většími bílými plochami. Naopak čím vyšší
                koeficient bude, tím bude obraz tmavší.
            </p>

            <Structure grid={gridWithCoefficient} cellType="image" />

            <Slider
                value={coefficient}
                min={0.01}
                max={4}
                step={0.5}
                onChange={(e, newValue) => setCoefficient(newValue as number)}
                valueLabelDisplay="on"
                sx={{ marginTop: "40px" }}
            />
        </Card>
    );
};
