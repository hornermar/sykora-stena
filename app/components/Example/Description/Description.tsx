import { Cell } from "@/app/types/General";
import { getColourDensity } from "@/app/utils/getColorDensity";
import { getShape } from "@/app/utils/getShape";
import { useMemo, useState } from "react";
import { Card } from "../../Card";
import { ExampleDescriptionGroup } from "./Group";
import { ExampleDescriptionShape } from "./Shape";

type ExampleDesriptionsProps = {
    grid: string[][];
    cell: Cell;
    coefficient: number;
    rule: number;
    defaultGrid: string[][];
};

const ExpandButton = ({
    expanded,
    onClick,
}: {
    expanded: boolean;
    onClick: () => void;
}) => {
    return (
        <div onClick={onClick}>
            {expanded ? <span>&#x2212;</span> : <span>&#x2b;</span>}
        </div>
    );
};

export const ExampleDescription = ({
    grid,
    cell,
    rule,
    coefficient,
    defaultGrid,
}: ExampleDesriptionsProps) => {
    const [groupExpanded, setGroupExpanded] = useState(true);
    const [shapeExpanded, setShapeExpanded] = useState(true);

    const group = useMemo(
        () => getColourDensity(grid, cell.x, cell.y, coefficient),
        [cell]
    );

    const shape = useMemo(
        () => getShape(grid, cell.x, cell.y, group.result, rule),
        [cell]
    );

    const cellContent = useMemo(() => defaultGrid[cell.y][cell.x], [cell]);

    return (
        <>
            <Card
                heading="2. Výpočet skupiny"
                button={
                    <ExpandButton
                        expanded={groupExpanded}
                        onClick={() => setGroupExpanded((prev) => !prev)}
                    />
                }
            >
                <ExampleDescriptionGroup
                    coefficient={coefficient}
                    group={group}
                    cellContent={cellContent}
                    expanded={groupExpanded}
                />
            </Card>

            <Card
                heading="3. Výpočet natočení"
                button={
                    <ExpandButton
                        expanded={shapeExpanded}
                        onClick={() => setShapeExpanded((prev) => !prev)}
                    />
                }
            >
                <ExampleDescriptionShape
                    rule={rule}
                    shape={shape}
                    expanded={shapeExpanded}
                />
            </Card>
        </>
    );
};
