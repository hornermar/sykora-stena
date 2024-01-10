"use client";
import { rulesItems } from "@/app/lib/formItems";
import { Stack } from "@mui/material";
import { map } from "lodash";
import Card from "../Card";
import { Chip } from "../Chip";
import { RuleExample } from "./RuleExample";

export const ArtistInputsRule = () => {
    return (
        <Card heading="4. Pravidlo" color="rgb(219, 219, 219)">
            <p>Dále je třeba zvolit jedno ze čtyř pravidel.</p>

            <Stack sx={{ margin: "10px 0 30px 0" }}>
                {map(rulesItems, (rule: Rule) => (
                    <Chip label={rule.text} />
                ))}
            </Stack>

            <p>Co to ale znamená?</p>

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
        </Card>
    );
};
