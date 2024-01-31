import { Stack } from "@mui/material";
import { useState } from "react";
import { Card } from "../Card";
import { Structure } from "../Structure";
import { ToggleButtonGroup } from "../ToggleButtonGroup";

type ArtistInputsDiagramProps = {
    grid: string[][];
};

export const ArtistInputsDiagram = ({ grid }: ArtistInputsDiagramProps) => {
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
                <Stack flexDirection="row" justifyContent="flex-end">
                    {/* <GridSwitch
                        checked={displayText}
                        onChange={() => setDisplayText((prev) => !prev)}
                    /> */}
                    <ToggleButtonGroup
                        value={displayText}
                        onChange={(newValue) => setDisplayText(newValue)}
                        buttons={[
                            {
                                label: "Text",
                                value: true,
                            },
                            {
                                label: "Obraz",
                                value: false,
                            },
                        ]}
                    />
                </Stack>
            </Card>
            <Card color="white">
                <Structure
                    grid={grid}
                    cellType={displayText ? "text" : "image"}
                />
            </Card>
        </>
    );
};
