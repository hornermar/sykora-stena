import { getCellSize } from "@/app/utils/getCellSize";
import { Stack } from "@mui/material";
import { map, size } from "lodash";
import {
    CSSProperties,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { Cell } from "../../types/General";
import { StructureGrid } from "./Grid";

export type StructureProps = {
    grid: string[][];
    defaultGrid?: string[][];
    cellType?: "image" | "text";
    sx?: CSSProperties;
    onCellClick?: (x: number, y: number) => void;
    activeCell?: Cell;
    activeNeighbours?: Cell[];
    color?: string;
};

export const Structure = memo(function Structure({
    grid,
    defaultGrid,
    cellType,
    sx,
    onCellClick,
    activeCell,
    activeNeighbours,
    color,
}: StructureProps) {
    const [cellSize, setCellSize] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    const rowsCount = size(grid);
    const columnsCount = Math.max(...map(grid, (row) => size(row)));

    useEffect(() => {
        const newCellSize = getCellSize(ref, columnsCount);
        setCellSize(Math.floor(newCellSize));
    }, [columnsCount]);

    const handleCellClick = useCallback(
        (x: number, y: number) => {
            if (onCellClick) {
                onCellClick(x, y);
            }
        },
        [onCellClick]
    );

    return (
        <Stack
            flexDirection="column"
            width="100%"
            alignItems="center"
            sx={{ margin: "0 auto", ...sx }}
            ref={ref}
        >
            {cellSize > 0 && (
                <StructureGrid
                    grid={grid}
                    cellSize={cellSize}
                    cellType={cellType}
                    defaultGrid={defaultGrid}
                    activeNeighbours={activeNeighbours}
                    activeCell={activeCell}
                    handleCellClick={handleCellClick}
                    color={color}
                />
            )}
        </Stack>
    );
});
