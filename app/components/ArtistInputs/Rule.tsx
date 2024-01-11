"use client";
import { rulesItems } from "@/app/lib/formItems";
import { Stack, Typography } from "@mui/material";
import { map } from "lodash";
import Card from "../Card";
import { RuleExample } from "./RuleExample";

export const ArtistInputsRule = () => {
    return (
        <>
            <Card heading="4. Pravidlo" color="white">
                <p>
                    Dále je třeba zvolit jedno ze čtyř <b>pravidel</b> Pro
                    jejich pochopení je nejprve potřeba vysvětlit následující
                    pojmy.
                </p>
            </Card>
            <Card color="white">
                <p>
                    Říkáme, že <b>barvy pokračují</b>, pokud je barva podél
                    strany prvku stejná jako barva podél sousedního okraje
                    sousedního prvku.
                </p>
                <RuleExample continues="color" />

                <p style={{ marginTop: "40px" }}>
                    Říkáme, že <b>tvary pokračují</b> na straně prvku, pokud se
                    každý půlkruh otevřený na stranu spojuje s půlkruhem
                    ohraničujícího prvku a tvoří úplný kruh nebo pokud se
                    spojují dva vzory, z nichž žádný není půlkruh otevřený na
                    stranu.
                </p>
                <RuleExample continues="shape" />
            </Card>

            <Card color="white">
                <p style={{ margin: 0 }}>
                    Kombinací těchto pojmů pak vznikla následující pravidla
                </p>
            </Card>

            <Stack flexDirection="row" flexWrap="wrap">
                {map(rulesItems, (rule: Rule) => (
                    <Card color="rgb(184, 231, 254)" width={"50%"}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: "400",
                                fontSize: "16px",
                                textAlign: "center",
                            }}
                        >
                            {rule.text}
                        </Typography>
                    </Card>
                ))}
            </Stack>
        </>
    );
};
