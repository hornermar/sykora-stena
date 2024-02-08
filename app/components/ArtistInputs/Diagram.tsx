import { Stack, Box } from "@mui/material";
import { useMemo, useState } from "react";
import { Card } from "../common/Card";
import { Structure } from "../Structure/Structure";
import { GridSwitch } from "../common/Switch";
import { Collapse } from "../common/Collapse";

type ArtistInputsDiagramProps = {
    grid: string[][];
};

export const ArtistInputsDiagram = ({ grid }: ArtistInputsDiagramProps) => {
    const smallGrid = useMemo(() => grid.slice(0, 11), [grid]);
    const [displayText, setDisplayText] = useState(false);

    return (
        <>
            <Card heading="2. Diagram" color="white">
                <p>
                    Umělec si připravil mřížku / zadáni, pro kterou si zvolil
                    počet buněk do výšky a šířky. Do ní pak umístil libovolný
                    počet elementů dle vlastního výběru. Do míst, kde si přál
                    urychlit nebo zpomalit přechody barev přidal znaménka{" "}
                    <b>+</b> a <b>-</b>.
                </p>
                <p style={{ marginBottom: 0 }}>Takhle mohl diagram vypadat</p>
            </Card>
            <Card color="white">
                <Structure
                    grid={smallGrid}
                    cellType={displayText ? "text" : "image"}
                />
                <Collapse expandable={false} sx={{ paddingTop: "10px" }}>
                    <Stack flexDirection="row" alignItems="center">
                        <GridSwitch
                            sx={{ marginLeft: "20px" }}
                            checked={!displayText}
                            onChange={() => setDisplayText((prev) => !prev)}
                        />
                    </Stack>
                </Collapse>
            </Card>
        </>
    );
};
