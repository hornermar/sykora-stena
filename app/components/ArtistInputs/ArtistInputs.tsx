"use client";
import MediaCard from "../MediaCard";
import { Structure } from "../Structure";
import { ArtistInputsElements } from "./Elements";

const gridForDiagram = [
    ["3z", "0", "4z", "0", "0", "0"],
    ["0", "0", "1i", "0", "2z", "0"],
    ["0", "0", "0", "0", "0", "0"],
];

const gridForCoefficient = [
    ["3z", "+", "4z", "0", "0", "0"],
    ["0", "0", "1i", "-", "2z", "0"],
    ["0", "-", "-", "0", "0", "0"],
];

export const ArtistInputs = () => {
    return (
        <>
            <ArtistInputsElements />

            <MediaCard heading="2. Diagram" color="rgb(219, 219, 219)">
                <p>
                    Poté si umělec připravil mřížku, do které umístil několik
                    počátečních prvků dle svojí volby. Vznikne mu tak vstupní
                    diagram
                </p>
                <Structure size={58} grid={gridForDiagram} cellType="text" />
            </MediaCard>
            <MediaCard heading="3. Koeficient" color="rgb(219, 219, 219)">
                <p>c {">"} 0</p>
                <p>
                    Do tohoto diagramu pak také umístil tnaménka <b>+</b> a{" "}
                    <b>-</b> v místech, kde si příl zvýšit nebo snížit hustotu
                    barvy.
                </p>
                <p>
                    Stupneň, o kolik se barva změnila na tmavší nebo světlejší
                    určuje koeficient c. Ten musí mít číselnou hodnotu a být
                    větší jak nula.
                </p>
                <p>
                    Nižší hodnoty <b>c</b> způsobí menší změny v hustotě barvy,
                    vyšší hodnoty naopak znamenají větší změnu.
                </p>

                <Structure
                    size={58}
                    grid={gridForCoefficient}
                    cellType="image"
                />
            </MediaCard>
            <MediaCard heading="4. Pravidla" color="rgb(219, 219, 219)">
                <p>Je třeba zvolit jedno ze čtyř pravidel.</p>

                <ul>
                    <li style={{ padding: "10px 0" }}>
                        Pravidlo 0: <b>Barva</b> i <b>tvar</b> na straně prvku
                        pokračují přes stranu společnou s jiným prvkem.
                    </li>
                    <li style={{ padding: "10px 0" }}>
                        Pravidlo 1: <b>Barva</b> na straně prvku pokračuje přes
                        stranu společnou s jiným prvkem, ale <b>tvar</b> nikoli.
                    </li>
                    <li style={{ padding: "10px 0" }}>
                        Pravidlo 2: <b>Barva</b> na straně prvku nepokračuje
                        přes stranu společnou s jiným prvkem, ale <b>tvar</b>{" "}
                        ano.
                    </li>
                    <li style={{ padding: "10px 0" }}>
                        Pravidlo 3: Ani <b>barva</b>, ani <b>tvar</b> na straně
                        prvku nepokračuje přes stranu společnou s jiným prvkem.
                    </li>
                </ul>
            </MediaCard>
            <MediaCard>
                <p>
                    Říkáme, že <i>barvy pokračují</i>, pokud je barva podél
                    strany prvku stejná jako barva podél sousedního okraje
                    sousedního prvku.
                </p>
                <p>
                    Říkáme, že <i>tvary pokračují</i> na straně prvku, pokud se
                    každý půlkruh otevřený na stranu spojuje s půlkruhem
                    ohraničujícího prvku a tvoří úplný kruh nebo pokud se
                    spojují dva vzory, z nichž žádný není půlkruhové pero na
                    stranu
                </p>
            </MediaCard>
        </>
    );
};
