import { Cell } from "@/app/types/General";
import { getColourDensity } from "@/app/utils/getColorDensity";
import { getShape } from "@/app/utils/getShape";
import { Stack } from "@mui/material";
import { useMemo } from "react";
import { ExampleDescriptionGroup } from "./Group";
import { ExampleDescriptionShape } from "./Shape";

type ExampleDesriptionsProps = {
    grid: string[][];
    cell: Cell;
    coefficient: number;
    rule: number;
    defaultGrid: string[][];
};

export const ExampleDescription = ({
    grid,
    cell,
    rule,
    coefficient,
    defaultGrid,
}: ExampleDesriptionsProps) => {
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
        <Stack>
            <ExampleDescriptionGroup
                coefficient={coefficient}
                group={group}
                cellContent={cellContent}
            />

            <ExampleDescriptionShape rule={rule} shape={shape} />
        </Stack>
    );
};
