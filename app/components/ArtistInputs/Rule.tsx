"use client";
import { getElements } from "@/app/utils/getElements";
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import MediaCard from "../MediaCard";
import { Structure } from "../Structure";
import { RuleExample } from "./RuleExample";

const smallSize = 45;

type RuleProps = {
    coefficient: number;
    grid: string[][];
};

export const Rule = ({ coefficient, grid }: RuleProps) => {
    const [rule, setRule] = useState<number>(0);
    const [gridWithRule, setGridWithRule] = useState(grid);

    useEffect(() => {
        setGridWithRule(getElements(rule, coefficient, grid));
    }, [rule]);

    return (
        <MediaCard heading="4. Pravidlo" color="rgb(219, 219, 219)">
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

            <FormControl sx={{ marginTop: "10px" }}>
                <RadioGroup
                    row
                    value={rule}
                    onChange={(e) => setRule(Number(e.target.value))}
                >
                    <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="0: Barva pokračuje, tvar pokračuje"
                    />
                    <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="1: Barva pokračuje, tvar nepokračuje"
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="2: Barva nepokračuje, tvar pokračuje"
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="3: Barva nepokračuje, tvar nepokračuje"
                    />
                </RadioGroup>
            </FormControl>

            <Structure size={30} grid={gridWithRule} cellType="image" />
        </MediaCard>
    );
};
