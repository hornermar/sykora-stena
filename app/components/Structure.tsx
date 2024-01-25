import { Stack } from "@mui/material";
import { map, size } from "lodash";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { Cell } from "../types/General";
import { getElementImage } from "../utils/getElementImages";

export type StructureProps = {
    grid: string[][];
    cellType?: "select" | "image" | "text";
    sx?: CSSProperties;
    onCellClick?: (x: number, y: number) => void;
    activeCell?: Cell;
};

export const Structure = ({
    grid,
    cellType,
    sx,
    onCellClick,
    activeCell,
}: StructureProps) => {
    const [cellSize, setCellSize] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    const rowsCount = size(grid);
    const columnsCount = Math.max(...map(grid, (row) => size(row)));

    const getCellSize = () => {
        if (!ref.current) return 0;

        const gridWidth = columnsCount;
        return ref.current.clientWidth / gridWidth;
    };

    useEffect(() => {
        const newCellSize = getCellSize();
        setCellSize(Math.floor(newCellSize));
    }, [grid]);

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
                    }}
                >
                    {map(row, (cell: string, x) => {
                        const isCellActive =
                            activeCell?.x === x && activeCell?.y === y;

                        const isCellEmpty =
                            cell === "0" || cell === "+" || cell === "-";
                        return (
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
                                    border: isCellActive
                                        ? "2px solid rgb(216, 167, 192)"
                                        : cellType === "text" || isCellEmpty
                                        ? "1px solid black"
                                        : "initial",
                                    backgroundColor: isCellActive
                                        ? "rgb(216, 167, 192)"
                                        : "unset",
                                }}
                            >
                                {cellType === "text" && (
                                    <span
                                    // style={{ textDecoration: "underline" }}
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
        </Stack>
    );
};
