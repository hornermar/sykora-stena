"use client";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";

export const Calculation = () => {
    return (
        <>
            <Card color="rgb(250, 186, 174)">
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
                <p style={{ margin: 0 }}>
                    Algoritmus začíná v levém horním rohu. Postupuje zleva
                    doprava v lichých řádcích a zprava doleva v sudých.
                </p>
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
            </Card>

            <Card heading="3. Výpočet otočení" color="white">
                <p>
                    V případě výběru otočení algoritmus nahlíží také do
                    sousedních prvků, pouze ale těch, které sousedí stranami. Do
                    pole se snaží dosadit prvek tak, aby co nejvíce vyhovoal
                    zvolenému pravidlu.
                </p>

                <p>
                    Pokud existuje tkových prvků víc, vybere z nich jeden
                    náhodně. Pokud naopak nevyhovuje žádný prvke, vybere náhodně
                    z celé skupiny.
                </p>
            </Card>
        </>
    );
};
