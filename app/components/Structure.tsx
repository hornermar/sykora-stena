import { Stack } from "@mui/material";
import { map, size } from "lodash";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { getElementImage } from "../utils/getElementImages";

export type StructureProps = {
    grid: string[][];
    cellType?: "select" | "image" | "text";
    // onCellChange?: any;
    isSpaceBetween?: boolean;
    sx?: CSSProperties;
    onCellClick?: (x: number, y: number) => void;
};

export const Structure = ({
    grid,
    // onCellChange,
    cellType,
    isSpaceBetween,
    sx,
    onCellClick,
}: StructureProps) => {
    const [cellSize, setCellSize] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const spaceBetweeen = isSpaceBetween ? 14 : 0;

    const getCellSize = () => {
        if (!ref.current) return 0;

        const gridWidth = Math.max(...map(grid, (row) => size(row)));
        return ref.current.clientWidth / gridWidth;
    };

    useEffect(() => {
        const newCellSize = isSpaceBetween
            ? getCellSize() - spaceBetweeen
            : getCellSize();
        setCellSize(Math.floor(newCellSize));
    }, [ref.current, grid]);

    return (
        <Stack
            flexDirection="column"
            width="100%"
            alignItems="center"
            sx={{ margin: "0 auto", ...sx }}
            ref={ref}
        >
            {map(grid, (row, y) => (
                <div
                    key={y}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: `${cellSize}px`,
                        marginTop: y === 0 ? 0 : spaceBetweeen / 2,
                        marginBottom:
                            y === size(grid) - 1 ? 0 : spaceBetweeen / 2,
                    }}
                >
                    {map(row, (cell: string, x) => (
                        <div
                            key={`${x}${y}`}
                            className={`element-${x}${y}`}
                            onClick={() => onCellClick && onCellClick(x, y)}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: `${cellSize}px`,
                                height: `${cellSize}px`,
                                border:
                                    cellType === "text" ||
                                    cell === "+" ||
                                    cell === "-" ||
                                    cell === "0"
                                        ? "1px solid black"
                                        : "unset",
                                marginRight:
                                    x === size(row) - 1 ? 0 : spaceBetweeen / 2,
                                marginLeft: x === 0 ? 0 : spaceBetweeen / 2,
                            }}
                        >
                            {cellType === "text" && (
                                <span>
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
                                    />
                                ) : (
                                    <span>
                                        <b>{cell}</b>
                                    </span>
                                ))}

                            {/* {cellType === "select" && onCellChange && (
                                <CellSelect
                                    onCellChange={onCellChange}
                                    cell={grid[y][x]}
                                    x={x}
                                    y={y}
                                />
                            )} */}
                        </div>
                    ))}
                </div>
            ))}
        </Stack>
    );
};
