"use client";
import Card from "../Card";
import { Structure } from "../Structure";

const smallSize = 45;

type ArtistInputsDiagramProps = {
    grid: string[][];
};

export const ArtistInputsDiagram = ({ grid }: ArtistInputsDiagramProps) => {
    return (
        <Card heading="2. Diagram" color="rgb(219, 219, 219)">
            <p>
                Umělec si připravil mřížku, pro kterou si zvolil počet prvků do
                výšky a šířky. Do ní pak umístil libovolný počet elementů dle
                vlastního výběru. Do míst, kde si přál zvýšit nebo naopak snížit
                hustotu barvy, přidal znaménka <b>+</b> a <b>-</b>.
            </p>

            <p>Výsledný diagram mohl vypadat například takto:</p>

            <Structure grid={grid} cellType="text" displaySwitch />
        </Card>
    );
};
