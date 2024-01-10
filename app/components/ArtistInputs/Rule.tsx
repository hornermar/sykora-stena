"use client";
import { Stack } from "@mui/material";
import Card from "../Card";
import { Chip } from "../Chip";
import { RuleExample } from "./RuleExample";

type ArtistInputsRuleProps = {
    coefficient: number;
    grid: string[][];
};

export const ArtistInputsRule = ({
    coefficient,
    grid,
}: ArtistInputsRuleProps) => {
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

            <p>Kombinací těchto pojmů jsou pak sestavená 4 pravidla.</p>

            <Stack spacing={1} sx={{ margin: "10px 0 30px 0" }}>
                <Chip label="Barva pokračuje, tvar pokračuje" />

                <Chip label="Barva pokračuje, tvar nepokračuje" />

                <Chip label="Barva nepokračuje, tvar pokračuje" />

                <Chip label="Barva nepokračuje, tvar pokračuje" />
            </Stack>
        </Card>
    );
};
