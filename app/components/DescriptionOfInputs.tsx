"use client";
import { Stack } from "@mui/material";
import { map } from "lodash";
import Image from "next/image";
import MediaCard from "../components/MediaCard";
import { getElementImage } from "../utils/getElementImages";
import { Structure } from "./Structure";

const basicElements = [
    ["1z", "1r", "2z", "3z", "4z", "4r"],
    ["1b", "1d", "2b", "3b", "4b", "4d"],
    ["1y", "0", "2y", "3y", "4y", "0"],
    ["1i", "0", "2r", "3r", "4i", "0"],
];

const size = 45;

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

export const DescriptionOfInputs = () => {
    return (
        <>
            <MediaCard color="transparent" heading="Bla bla ...">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. //
                    Nullam justo enim, consectetuer nec, ullamcorper ac, //
                    vestibulum in, elit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. //
                    Nullam justo enim, consectetuer nec, ullamcorper ac, //
                    vestibulum in, elit.
                </p>
            </MediaCard>
            <MediaCard
                heading="1. Výběr prvků"
                //color="transparent"
                //color="rgb(245, 214, 61)"
                color="rgb(219, 219, 219)"
            >
                <Stack spacing={4} flexDirection="column">
                    {map(basicElements, (row, y) => (
                        <div
                            key={y}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            {map(row, (cell: string, x) => {
                                return (
                                    <div
                                        key={`${x}${y}`}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        {/* TODO remove background color and redo svg */}
                                        <div
                                            style={{
                                                height: `${size}px`,
                                                backgroundColor:
                                                    cell !== "0"
                                                        ? "white"
                                                        : "transparent",
                                            }}
                                        >
                                            <Image
                                                src={getElementImage(cell)}
                                                width={size}
                                                height={size}
                                                alt={`element ${cell}`}
                                            />
                                        </div>

                                        <span>{cell !== "0" ? cell : " "}</span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                    <p>
                        Nejříve musel určit prvky, které pro danou stukturu
                        použije. Poté je rozdělil do skupin podle hustoty barvy.
                    </p>
                    <p>
                        Skupina 1 v tomto případě obsahuje nejsvětlejší prvky{" "}
                        <b>1z</b>, <b>1b</b>, <b>1y</b>, <b></b>
                        1i, <b>1r</b> a <b>1d</b>. Skupina 2 obsahovala prvky{" "}
                        <b>2z</b>, <b>2b</b>, <b>2y</b> a<b>2r</b> a tak dále.
                    </p>
                    <p>
                        Každý prvek má vždy právě jeden protějšek, který má
                        prohozené barvy. Například protějšek k <b>1z</b> je{" "}
                        <b>4r</b>, k <b>1b</b> pak <b>4d</b>, k <b>2r</b> pak{" "}
                        <b>3r</b>.
                    </p>
                </Stack>
            </MediaCard>

            <MediaCard color="transparent">
                <p>
                    Pro počítač jsou u každého prvku zaznamenány barvy na každé
                    ze čtyř stran a také, zda má na straně přilehlý otevřený
                    půlkruh nebo ne.
                </p>
            </MediaCard>
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
