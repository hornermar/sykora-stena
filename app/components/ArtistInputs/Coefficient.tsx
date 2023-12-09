import { getElements } from "@/app/utils/getElements";
import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
import MediaCard from "../MediaCard";
import { Structure } from "../Structure";

type CoefficientProps = {
    grid: string[][];
    rule: number;
};

export const Coefficient = ({ grid, rule }: CoefficientProps) => {
    const [coefficient, setCoefficient] = useState(2);
    const [gridWithCoefficient, setGridWithCoefficient] = useState(grid);

    useEffect(() => {
        setGridWithCoefficient(getElements(rule, coefficient, grid));
    }, [coefficient]);

    return (
        <MediaCard heading="3. Koeficient" color="rgb(219, 219, 219)">
            <p>
                Stupneň, o kolik se v poli se znaménky <b>+</b> a <b>-</b> změní
                barva na tmavší nebo světlejší určuje koeficient <b>c</b>.
            </p>
            <p>
                Nižší hodnoty <b>c</b> způsobí menší změnu v hustotě barvy,
                vyšší hodnoty naopak znamenají větší změnu.
            </p>
            <p>Koeficient musí mít číselnou hodnotu a být větší jak nula.</p>

            <Structure size={30} grid={gridWithCoefficient} cellType="image" />

            <Slider
                value={coefficient}
                min={0}
                max={4}
                step={0.5}
                onChange={(e, newValue) => setCoefficient(newValue as number)}
                valueLabelDisplay="on"
                sx={{ marginTop: "30px" }}
            />
        </MediaCard>
    );
};
