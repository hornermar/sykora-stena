import { Stack } from "@mui/material";
import { useState } from "react";
import { Card } from "../Card";
import { Structure } from "../Structure";
import { Switch } from "../Switch";

type ArtistInputsDiagramProps = {
    grid: string[][];
};

export const ArtistInputsDiagram = ({ grid }: ArtistInputsDiagramProps) => {
    const [displayText, setDisplayText] = useState(false);

    return (
        <>
            <Card heading="2. Rastr" color="white">
                <p>
                    Umělec si připravil mřížku, pro kterou si zvolil počet prvků
                    do výšky a šířky. Do ní pak umístil libovolný počet elementů
                    dle vlastního výběru. Do míst, kde si přál zvýšit nebo
                    naopak snížit hustotu barvy, přidal znaménka <b>+</b> a{" "}
                    <b>-</b>.
                </p>
                <p style={{ marginBottom: 0 }}>Takhle mohl rastr vypadat</p>
                <Stack flexDirection="row" justifyContent="flex-end">
                    <Switch
                        checked={displayText}
                        onChange={() => setDisplayText((prev) => !prev)}
                    />
                </Stack>
            </Card>
            <Card color="white">
                {displayText ? (
                    <Structure grid={grid} cellType="image" />
                ) : (
                    <Structure grid={grid} cellType="text" />
                )}
            </Card>
        </>
    );
};
