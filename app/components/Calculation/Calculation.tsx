"use client";
import { rulesItems } from "@/app/lib/formItems";
import { Rule } from "@/app/types/Rule";
import { Stack } from "@mui/material";
import { find } from "lodash";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";
import { Structure } from "../Structure";

// const grid1 = [
//     ["0", "0", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"],
// ];

const grid1 = [
    // 1
    ["1y", "1b", "1r", "2z", "3r", "1r", "3y", "+", "0", "-", "-"],
    // 2
    ["-", "1r", "+", "+", "-", "-", "-", "4z", "+", "-", "2r"],
];

const getGroup = (grid: string[][], row: number, col: number) => {
    const group = grid[row][col];
    return group[0];
};

export const Calculation = () => {
    const rule = find(rulesItems, "code", 2) as Rule;
    const coefficient = 0.75;

    return (
        <>
            <Card color="rgb(250, 186, 174)">
                <SectionTitle letter="B." title="Výpočet chybějících prvků" />
                <p
                    style={{
                        marginTop: "70px",
                        marginBottom: 0,
                        fontSize: "16px",
                        fontWeight: 400,
                    }}
                >
                    Až potud určoval vše autor. Výpočet typu sousedních elementů
                    (1, 2, 3, 4) a jejich natočení (z, b, y atd.) zajišťuje
                    počítač. Výpočet typu se děje na základě vypočítávání
                    průměru ze sousedních elementů. Natočení se řídí zvoleným
                    pravidlem.
                </p>
                <p></p>
            </Card>

            <Card heading="1. Průchod diagramem" color="white)">
                <p style={{ margin: 0 }}>
                    Algoritmus začíná v levém horním rohu. Postupuje zleva
                    doprava v lichých řádcích a zprava doleva v sudých.
                </p>
            </Card>

            <Card heading="2. Výpočet skupiny" color="white">
                <Stack
                    sx={{
                        ".element-70": {
                            outline: "4px solid rgb(250, 186, 174)",
                            zIndex: 10,
                        },
                        ".element-60, .element-80, .element-61, .element-71,  .element-81":
                            {
                                backgroundColor: "rgb(247, 223, 130)",
                            },
                        marginBottom: "30px",
                        marginTop: "30px",
                    }}
                >
                    <Structure grid={grid1} cellType="text" />
                </Stack>

                <p>
                    V každé buňce, která je prázdná, se algoritmus zastaví a
                    podívá se na všechny okolní elementy, které se dotýkají
                    stranou nebo rohy. Zjistí, do které skupiny patří (1, 2, 3
                    nebo 4) a z hodnot vypočítá průměr.
                </p>

                <p>(3 + 4) / 2 = 3.5</p>

                <p>
                    Pokud právě zkoumaná buňka obsahuje + nebo -, přičte nebo
                    odečte od průměru předem daný koeficient.
                </p>

                <p>3.5 + {coefficient} = 4.24</p>

                <p>
                    Vzhledem k tomu, že skupiny jsou dány pouze celými čísly (1,
                    2, 3 a 4), zvolí se nejbližší hodnota.
                </p>

                <p>4</p>

                <p>
                    Pokud výsledný koeficient okolí není jednoznačný (například
                    3.5) začne počítač prohledávat širší okolí elementu, nejdále
                    však o čtyři elementy dál a zopakuje předchozí kroky.
                    Výsledek pak určuje, Z jaké skupiny bude prvkek vybrán.
                </p>
            </Card>

            <Card heading="3. Výpočet otočení" color="white">
                <p>
                    Nyní musí počítač rozhodnout, který prvek z výsledné skupiny
                    by měl být umístěn do zvýrazněného pole.
                </p>

                <Stack sx={{ margin: "30px 0" }}>
                    <Structure
                        grid={[["4z", "4b", "4y", "4i", "4r", "4d"]]}
                        cellType="image"
                        isSpaceBetween
                    />
                </Stack>

                <Stack
                    sx={{
                        ".element-70": {
                            backgroundColor: "rgb(250, 186, 174)",
                            outline: "4px solid rgb(250, 186, 174)",
                            zIndex: 100,
                        },
                        ".element-60, .element-80,  .element-71": {
                            outline: "4px solid rgb(247, 223, 130)",
                            zIndex: 10,
                        },
                        marginBottom: "30px",
                        marginTop: "50px",
                    }}
                >
                    <Structure grid={grid1} cellType="image" />
                </Stack>

                <p>
                    Podle pravidla 2 musí počítač nejprve najít všechny prvky
                    skupiny 4, pro které by barvy nepokračovaly přes stranu
                    společnou s jiným prvkem, tj. prvky skupiny 4, které mají
                    levou i spodní stranu černou.
                </p>

                <p>
                    To je ale nemožné. Algoritmus proto vyhledá všechny prvky,
                    které splňují pouze jednu z těchto podmínek, tj. 4z, 4b, 4r
                    a 4d.
                </p>

                <Stack sx={{ margin: "40px 0" }}>
                    <Structure
                        grid={[["4z", "4b", "4r", "4d"]]}
                        cellType="image"
                        isSpaceBetween
                    />
                </Stack>

                <p>
                    Potom algoritmus vybere z těchto čtyř prvků všechny ty, u
                    kterých tvary pokračují přes hranici, tedy ty, které mají
                    půlkruh otevřený na levé straně, ale nemají půlkruh otevřený
                    na spodní straně, totiž, 4z a 4r.
                </p>

                <Stack sx={{ margin: "50px 0" }}>
                    <Structure
                        grid={[["4z", "4r"]]}
                        cellType="image"
                        isSpaceBetween
                    />
                </Stack>

                <p></p>
            </Card>
        </>
    );
};
