import { rulesItems } from "@/app/lib/formItems";
import { NeighbourItem } from "@/app/types/Neighbout";
import { Rule } from "@/app/types/Rule";
import { Shape } from "@/app/types/Shape";
import { Box, Collapse, Stack } from "@mui/material";
import { find, map } from "lodash";
import { memo, useMemo } from "react";
import { ExampleGrid } from "../../ExampleGrid";
import { ExampleDescriptionLabel } from "./Label";

const LabelForSide = memo(function LabelForSide({
    side,
}: {
    side?: NeighbourItem;
}) {
    return side ? (
        <Box
            sx={{
                fontSize: "16px",
                width: "100px",
                height: "30px",
                textAlign: "center",
            }}
        >
            {/* {side.color === "black" && <span>&#9679;</span>}
            {side.color === "white" && <span>&#9675;</span>}
            {side.shape && <span>&#x2714;</span>}
            {!side.shape && <span>&#x2715;</span>} */}
            {side.color === "black" && "černá, "}
            {side.color === "white" && "bílá, "}
            {side.shape && "tvar ano"}
            {!side.shape && "tvar ne"}
        </Box>
    ) : (
        <Box sx={{ width: "96px", height: "30px" }}></Box>
    );
});

type ExampleDescriptionShapeProps = {
    rule: number;
    shape: Shape;
    expanded: boolean;
};

export const ExampleDescriptionShape = ({
    rule,
    shape,
    expanded,
}: ExampleDescriptionShapeProps) => {
    const ruleItem = useMemo(
        () =>
            find(rulesItems, (ruleItem: Rule) => rule === ruleItem.code) ??
            rulesItems[0],
        [rule]
    );

    const shapeNeighbours = shape.description.neighbours;

    const indexOfFinalOption = useMemo(() => {
        return shape.description.finalOptions?.findIndex(
            (option) => option.name === shape.result
        );
    }, [shape.result, shape.description.finalOptions]);

    return (
        <>
            <Collapse in={expanded}>
                <p>
                    Při výběru natočení zkoumá sousední elementy (dotýkající se
                    pouze stranou stranou) a jejich vlastnosti. Těmi jsou barva
                    (černá / bílá) a tvar na sousedící straně (ano / ne).
                </p>
                <p>Jaké vlastnosti hledá se řídí pravidlem, v tomto případě:</p>
                <p>
                    <i>
                        {ruleItem?.code} : {ruleItem?.text}
                    </i>
                </p>

                <p>Vzor pro jednotlivé strany a vlastnosti:</p>

                {shapeNeighbours && (
                    <Stack
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        sx={{ fontSize: "14px" }}
                    >
                        <LabelForSide side={shapeNeighbours?.bottom} />
                        <Stack
                            flexDirection="row"
                            width="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <LabelForSide side={shapeNeighbours?.right} />
                            <div
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    border: "1px solid black",
                                }}
                            ></div>
                            <LabelForSide side={shapeNeighbours?.left} />
                        </Stack>
                        <LabelForSide side={shapeNeighbours?.top} />
                    </Stack>
                )}

                <p>
                    Protože {shape.description.reason}. Výsledkem je{" "}
                    <b>{shape.result}</b>
                </p>
            </Collapse>

            <ExampleGrid
                grid={[
                    map(
                        shape.description.finalOptions,
                        (option) => option.name
                    ),
                ]}
                activeCell={{ x: indexOfFinalOption ?? 0, y: 0 }}
                displayName
                size={30}
                sx={{
                    justifyContent: "flex-start",
                    gap: "10px",
                    marginTop: "5px",
                }}
            />
        </>
    );
};
