import { Stack } from "@mui/material";
import { map, size } from "lodash";
import Image from "next/image";
import {
    CSSProperties,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { Cell } from "../types/General";
import { getElementImage } from "../utils/getElementImages";

type StructureGridProps = {
    grid: string[][];
    cellSize: number;
    cellType?: "image" | "text";
    defaultGrid?: string[][];
    activeNeighbours?: Cell[];
    activeCell?: Cell;
    handleCellClick: (x: number, y: number) => void;
    color?: string;
};

const StructureGrid = ({
    cellSize,
    cellType,
    defaultGrid,
    activeNeighbours,
    activeCell,
    handleCellClick,
    color,
    grid,
}: StructureGridProps) => {
    return (
        <>
            {map(grid, (row, y) => (
                <div
                    key={y}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: `${cellSize}px`,
                    }}
                >
                    {map(row, (cell: string, x) => {
                        const isCellActive =
                            activeCell?.x === x && activeCell?.y === y;
                        const isCellEmpty =
                            cell === "0" || cell === "+" || cell === "-";
                        const isCellOriginal =
                            defaultGrid &&
                            defaultGrid[y][x] !== "+" &&
                            defaultGrid[y][x] !== "-" &&
                            defaultGrid[y][x] === cell;

                        const isCellActiveNeighbour =
                            activeNeighbours &&
                            activeNeighbours.some(
                                (neighbour) =>
                                    neighbour.x === x && neighbour.y === y
                            );

                        return (
                            <div
                                key={`${x}${y}`}
                                className={`element-${x}${y}`}
                                onClick={() => handleCellClick(x, y)}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: `${cellSize}px`,
                                    height: `${cellSize}px`,
                                    border:
                                        isCellActive || isCellActiveNeighbour
                                            ? `2px solid ${color}`
                                            : cellType === "text" || isCellEmpty
                                            ? "1px solid black"
                                            : "initial",
                                    backgroundColor: isCellActive
                                        ? color
                                        : "transparent",
                                    zIndex: isCellActive
                                        ? 100
                                        : isCellActiveNeighbour
                                        ? 50
                                        : 0,
                                }}
                            >
                                {cellType === "text" && (
                                    <span
                                        style={{
                                            textDecoration:
                                                defaultGrid && isCellOriginal
                                                    ? "underline"
                                                    : "none",
                                        }}
                                    >
                                        <b>{cell !== "0" && cell}</b>
                                    </span>
                                )}

                                {cellType === "image" &&
                                    (cell !== "+" && cell !== "-" ? (
                                        <Image
                                            src={getElementImage(cell)}
                                            width={cellSize}
                                            height={cellSize}
                                            alt={`element ${cell}`}
                                            style={{
                                                border:
                                                    isCellActive ||
                                                    isCellActiveNeighbour
                                                        ? `2px solid ${color}`
                                                        : "none",
                                            }}
                                        />
                                    ) : (
                                        <span>
                                            <b>{cell}</b>
                                        </span>
                                    ))}
                            </div>
                        );
                    })}
                </div>
            ))}
        </>
    );
};

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

export const Structure = memo(
    ({
        grid,
        defaultGrid,
        cellType,
        sx,
        onCellClick,
        activeCell,
        activeNeighbours,
        color,
    }: StructureProps) => {
        const [cellSize, setCellSize] = useState(0);
        const ref = useRef<HTMLDivElement | null>(null);

        const rowsCount = size(grid);
        const columnsCount = Math.max(...map(grid, (row) => size(row)));

        const getCellSize = useCallback(() => {
            if (!ref.current) return 0;

            const gridWidth = columnsCount;
            return ref.current.clientWidth / gridWidth;
        }, [columnsCount]);

        useEffect(() => {
            const newCellSize = getCellSize();
            setCellSize(Math.floor(newCellSize));
        }, [getCellSize]);

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
    }
);
