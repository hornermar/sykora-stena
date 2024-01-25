"use client";
import { Stack } from "@mui/material";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";
import { Structure } from "../Structure";

const gridForGroup = [
    // 4
    ["+", "-", "-", "-", "3b", "+", "+"],
    // 5
    ["0", "-", "1d", "-", "+", "+", "0"],
    // 6
    ["0", "-", "-", "1y", "+", "+", "+"],
];

type CalculationProps = {
    color: string;
};

export const Calculation = ({ color }: CalculationProps) => {
    return (
        <>
            <Card color={color}>
                <SectionTitle letter="B." title="Výpočet" />
                <p
                    style={{
                        marginTop: "70px",
                        marginBottom: 0,
                    }}
                >
                    Až potud určoval vše autor. Vyplnění prázdných políček
                    postupuje po řadách. Algoritmus vybere nejprve skupinu (1,
                    2, 3, 4) na základě skupin sousedních prvků a koeficientu.
                    Poté z ní vybere natočení (z, b, y atd.) tak, aby odpovídalo
                    zvolenému pravidlu.
                </p>
                <p></p>
            </Card>

            <Card heading="1. Průchod diagramem" color="white">
                <p>
                    Algoritmus začíná v levém horním rohu. Postupuje zleva
                    doprava v lichých řádcích a zprava doleva v sudých.
                </p>
                <Stack sx={{ margin: "30px 0 20px 0" }}>
                    <Structure
                        grid={[
                            ["0", "0", "0", "0", "0", "0", "0", "0"],
                            ["0", "0", "0", "0", "0", "0", "0", "0"],
                        ]}
                        cellType="text"
                    />
                </Stack>
            </Card>

            <Card heading="2. Výpočet skupiny" color="white">
                <p>
                    Pří výpočtu skupiny prvku algortitmus zohlednuje sousední
                    prvky, které se s ním dotýkají stranou nebo rohy.
                </p>
                <p>
                    Spočítá průměr ze sousedních prvků (ze skupin). V případě,
                    že se v prvku nachází + nebo -, přičte nebo odečte od
                    průměru předem daný koeficient.
                </p>
                <p>
                    Vybere nejbližší skupinu (1, 2, 3 nebo 4). Z té pak bude
                    vybírat natočení.
                </p>

                <p>
                    Pokud výsledek není jednoznačný (například 3.5) začne
                    počítač prohledávat širší okolí elementu, nejdále však o
                    čtyři elementy dál a zopakuje předchozí kroky.
                </p>
                <Stack
                    sx={{
                        margin: "30px 0 20px 0",
                        ".element-31": {
                            outline: `4px solid ${color}`,
                            zIndex: 100,
                        },
                        ".element-21, .element-40, .element-32": {
                            outline: "4px solid #00539CFF",
                            zIndex: 10,
                        },
                    }}
                >
                    <Structure grid={gridForGroup} cellType="text" />
                </Stack>
            </Card>

            <Card heading="3. Výpočet otočení" color="white">
                <p>
                    V případě výběru otočení algoritmus nahlíží také do
                    sousedních prvků, pouze ale těch, které sousedí stranami. Do
                    pole se snaží dosadit prvek tak, aby co nejvíce vyhovoal
                    zvolenému pravidlu.
                </p>

                <p>
                    Pokud existuje takových prvků víc, vybere z nich jeden
                    náhodně. Pokud naopak nevyhovuje žádný prvkek, vybere
                    náhodně z celé skupiny.
                </p>
                <Stack
                    sx={{
                        margin: "30px 0 20px 0",
                        ".element-31": {
                            outline: `4px solid ${color}`,
                            zIndex: 100,
                        },
                        ".element-21,  .element-32": {
                            outline: "4px solid #00539CFF",
                            zIndex: 10,
                        },
                    }}
                >
                    <Structure grid={gridForGroup} cellType="image" />
                </Stack>
            </Card>
        </>
    );
};
