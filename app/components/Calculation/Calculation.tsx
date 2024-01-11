"use client";
import Card from "../Card";
import { SectionTitle } from "../SectionTitle";
import { Structure } from "../Structure";

const grid1 = [
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];

const grid2 = [
    ["1z", "2z", "3z", "4b", "4d"],
    ["2r", "2b", "3y", "4b", "3z"],
    ["2b", "2r", "+", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];

export const Calculation = () => {
    return (
        <>
            <Card color="rgb(219, 219, 219)">
                <SectionTitle letter="B." title="Dopočet chybějících prvků" />
            </Card>
            <Card heading="1. Průchod diagramem" color="rgb(219, 219, 219)">
                <p style={{ margin: 0 }}>
                    Algoritmus začíná v elementu [1;1] v levém horním rohu.
                    Postupuje zleva doprava v lichých řádcích a zprava doleva v
                    sudých.
                </p>
            </Card>
            <Card color="rgb(250, 186, 174)">
                <Structure grid={grid1} />
            </Card>
            <Card heading="2. Výběr skupiny" color="rgb(219, 219, 219)">
                <p>
                    Pro každý element, který není vyplněný, zkontroluje všechny
                    okolní elementy. V každé buňce, která je prázdná, se zastaví
                    a zkontroluje všechny okolní elementy. Zjistí, do které
                    skupiny patří (1, 2, 3 nebo 4) a z hodnot vypočítá průměr
                    (pokud obsahují + nebo -, vynechá je).
                </p>

                <p>
                    Pokud právě zkoumaná buňka obsahuje + nebo -, přičte nebo
                    odečte od průměru předem daný koeficient.
                </p>

                <p>
                    Výslednou hodnotu zaokrouhlí na celé číslo. Pokud je hodnota
                    menší než 1, zaokrouhlí se na 1. Pokud je hodnota větší než
                    4, zaokrouhlí se na 4. To aby se získala jedna ze skupin.
                </p>

                <p>
                    Pokud výsledný koeficient okolí není jednoznačný (například
                    3,5) začne počítač prohledávat širší okolí elementu, nejdále
                    však o čtyři elementy dál.
                </p>

                <p>
                    Výsledek pak určuje, ze které skupiny se vybírá element pro
                    umístění do buňky.
                </p>
            </Card>
            <Card color="rgb(250, 186, 174)">
                <Structure grid={grid2} cellType="text" />
            </Card>
            <Card heading="3. Výběr prvku" color="rgb(219, 219, 219)">
                <p>
                    Umělec si připravil mřížku, pro kterou si zvolil počet prvků
                    do výšky a šířky. Do ní pak umístil libovolný počet elementů
                    dle vlastního výběru. Do míst, kde si přál zvýšit nebo
                    naopak snížit hustotu barvy, přidal znaménka <b>+</b> a{" "}
                    <b>-</b>.
                </p>

                <p>Výsledný diagram mohl vypadat například takto:</p>
            </Card>
        </>
    );
};
