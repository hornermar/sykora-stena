"use client";
import MediaCard from "../MediaCard";
import { Structure } from "../Structure";
import { Coefficient } from "./Coefficient";
import { ArtistInputsElements } from "./Elements";

const gridForDiagram = [
    // 1
    ["-", "-", "-", "0", "3r", "1r", "+", "+", "0", "-", "-"],
    // 2
    ["-", "1r", "+", "+", "-", "-", "-", "4z", "+", "-", "2r"],
    // 3
    ["-", "+", "+", "4i", "-", "1i", "-", "0", "0", "0", "0"],
    // 4
    ["-", "+", "+", "+", "-", "-", "-", "3b", "+", "+", "0"],
    // 5
    ["1z", "0", "0", "0", "-", "1d", "-", "+", "+", "0", "-"],
    // 6
    ["-", "+", "+", "0", "-", "-", "1y", "+", "+", "+", "1d"],
    // 7
    ["-", "+", "4z", "+", "1r", "-", "-", "0", "+", "0", "-"],
    // 8
    ["0", "+", "+", "+", "0", "-", "-", "3b", "0", "-", "-"],
    // 9
    ["+", "+", "+", "1d", "0", "-", "-", "+", "+", "4r", "-"],
    // 10
    ["+", "0", "3b", "+", "0", "0", "1r", "+", "+", "0", "-"],
];

const smallSize = 30;

export const ArtistInputs = () => {
    return (
        <>
            <ArtistInputsElements />

            <MediaCard heading="2. Diagram" color="rgb(219, 219, 219)">
                <p>
                    Poté si umělec připravil mřížku, do které rozmístil několik
                    počátečních elementů dle vlastní volby. Přidal do něj také
                    znaménka <b>+</b> a <b>-</b> v místech, kde si přál zvýšit
                    nebo snížit hustotu barvy.
                </p>
                <Structure
                    size={smallSize}
                    grid={gridForDiagram}
                    cellType="text"
                    displaySwitch
                />
            </MediaCard>
            <Coefficient grid={gridForDiagram} />

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
