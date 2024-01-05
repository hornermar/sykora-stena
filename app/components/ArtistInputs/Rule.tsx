"use client";
import { getElements } from "@/app/utils/getElements";
import { Chip, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Card from "../Card";
import { Structure } from "../Structure";
import { RuleExample } from "./RuleExample";

const green = "rgb(4, 117, 159)";

const StyledChip = styled(Chip)((props) => ({
    // border: "2px solid black",
    backgroundColor: props.variant === "filled" ? green : "black",
    color: "white",
    fontSize: "16px",
    "&:active": {
        boxShadow: "none",
        backgroundColor: green,
    },
    "&:focus": {
        backgroundColor: green,
    },
}));

type ArtistInputsRuleProps = {
    coefficient: number;
    grid: string[][];
};

export const ArtistInputsRule = ({
    coefficient,
    grid,
}: ArtistInputsRuleProps) => {
    const [rule, setRule] = useState<number>(0);
    const [gridWithRule, setGridWithRule] = useState(grid);

    useEffect(() => {
        setGridWithRule(getElements(rule, coefficient, grid));
    }, [rule]);

    return (
        <Card heading="4. Pravidlo" color="rgb(219, 219, 219)">
            <p>Dále je třeba zvolit jedno ze čtyř pravidel.</p>

            <p>Nejprve je ale důležité vysvětlit následující pojmy:</p>

            <p>
                Říkáme, že <i>barvy pokračují</i>, pokud je barva podél strany
                prvku stejná jako barva podél sousedního okraje sousedního
                prvku.
            </p>

            <RuleExample continues="color" />

            <p>
                Říkáme, že <i>tvary pokračují</i> na straně prvku, pokud se
                každý půlkruh otevřený na stranu spojuje s půlkruhem
                ohraničujícího prvku a tvoří úplný kruh nebo pokud se spojují
                dva vzory, z nichž žádný není půlkruh otevřený na stranu.
            </p>

            <RuleExample continues="shape" />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            ></div>

            <p>Z těchto pojmů jsou pak sestavená pravidla:</p>

            <Stack spacing={1} sx={{ margin: "10px 0 30px 0" }}>
                <div>
                    <StyledChip
                        label="Barva pokračuje, tvar pokračuje"
                        clickable
                        onClick={() => setRule(0)}
                        variant={rule === 0 ? "filled" : "outlined"}
                    />
                </div>
                <div>
                    <StyledChip
                        label="Barva pokračuje, tvar nepokračuje"
                        clickable
                        onClick={() => setRule(1)}
                        variant={rule === 1 ? "filled" : "outlined"}
                    />
                </div>
                <div>
                    <StyledChip
                        label="Barva nepokračuje, tvar pokračuje"
                        clickable
                        onClick={() => setRule(2)}
                        variant={rule === 2 ? "filled" : "outlined"}
                    />
                </div>
                <div>
                    <StyledChip
                        label="Barva nepokračuje, tvar nepokračuje"
                        clickable
                        onClick={() => setRule(3)}
                        variant={rule === 3 ? "filled" : "outlined"}
                    />
                </div>
            </Stack>
            <Structure grid={gridWithRule} cellType="image" />
        </Card>
    );
};
