import { rulesItems } from "@/app/lib/formItems";
import { ElementType } from "@/app/types/ElementType";
import { Neighbour, NeighbourItem } from "@/app/types/Neighbout";
import { Rule } from "@/app/types/Rule";
import { Box, Stack } from "@mui/material";
import { find, map } from "lodash";
import { useMemo } from "react";
import { ExampleGrid } from "../../ExampleGrid";

const LabelForSide = ({ side }: { side?: NeighbourItem }) => {
    return side ? (
        <Box
            sx={{
                fontSize: "16px",
                width: "30px",
                height: "30px",
                textAlign: "center",
            }}
        >
            {side.color === "black" && <span>&#9679;</span>}
            {side.color === "white" && <span>&#9675;</span>}{" "}
            {side.shape && <span>&#x2714;</span>}
            {!side.shape && <span>&#x2715;</span>}
        </Box>
    ) : (
        <Box sx={{ width: "30px", height: "30px" }}></Box>
    );
};

type ExampleDescriptionShapeProps = {
    rule: number;
    shape: {
        result: string | undefined;
        description: {
            neighbours: Neighbour;
            options: ElementType[];
            reason: string | undefined;
            finalOptions: ElementType[] | undefined;
        };
    };
};

export const ExampleDescriptionShape = ({
    rule,
    shape,
}: ExampleDescriptionShapeProps) => {
    const ruleItem = useMemo(
        () =>
            find(rulesItems, (ruleItem: Rule) => rule === ruleItem.code) ??
            rulesItems[0],
        [rule]
    );

    const shapeNeighbours = shape.description.neighbours;

    return (
        <>
            <label style={{ fontSize: "14px", fontWeight: "400" }}>
                Na základě pravidla {ruleItem?.code} ({ruleItem?.text}) se hledá
                takový prvek, který má vlastnosti:
            </label>

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

            <label style={{ fontSize: "14px", fontWeight: "400" }}>
                Protože {shape.description.reason}
            </label>

            {
                <ExampleGrid
                    grid={[
                        map(
                            shape.description.finalOptions,
                            (option) => option.name
                        ),
                    ]}
                    displayName
                    size={30}
                    sx={{
                        justifyContent: "flex-start",
                        gap: "10px",
                        marginTop: "5px",
                    }}
                />
            }

            <label style={{ fontSize: "14px", fontWeight: "400" }}>
                Výsledkem je prvek: {shape.result}
            </label>
        </>
    );
};
